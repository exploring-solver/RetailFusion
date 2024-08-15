import React, { createContext, useState, useContext, useEffect } from 'react';
import * as authStorage from '../services/authStorage';

const AuthContext = createContext();

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            const token = await authStorage.getToken();
            if (token) {
                try {
                    const response = await fetch(`${backend_url}/api/auth/validate`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setUser(data.user);
                        await authStorage.storeUser(JSON.stringify(data.user));
                    } else {
                        // Handle invalid token, e.g., log out
                        await logout();
                    }
                } catch (error) {
                    console.error('Failed to validate token', error);
                    await logout();
                }
            }
            setLoading(false);
        };
        loadUser();
    }, []);

    const login = async (userData) => {
        setUser(userData);
        await authStorage.storeUser(JSON.stringify(userData));
    };

    const logout = async () => {
        setUser(null);
        await authStorage.removeToken();
        await authStorage.removeUser();
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};