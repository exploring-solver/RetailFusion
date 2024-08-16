import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const MyCartButton = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartItems) || [];

    const handleClick = () => {
        navigate('/cart');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed top-20 right-10 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center transition-all duration-300 ease-in-out"
        >
            <span className="relative">
                <FiShoppingCart className="w-6 h-6" />
                {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItems.length}
                    </span>
                )}
            </span>
        </button>
    );
};

export default MyCartButton;
