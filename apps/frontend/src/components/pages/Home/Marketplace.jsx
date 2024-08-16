import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

function Marketplace() {
    const dispatch = useDispatch();

    const addToCartHandler = (options) => {
        dispatch({ type: "addToCart", payload: options });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
    };

    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen p-10">
            <h1 className="text-4xl font-bold text-white text-center mb-10">Furniture</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                <Product
                    title="Wooden Chair"
                    price="4000"
                    image="chair.glb"
                    addToCart={addToCartHandler}
                    id="wooden-chair"
                />
                <Product
                    title="Leather Sofa"
                    price="8000"
                    image="sofa.glb"
                    addToCart={addToCartHandler}
                    id="leather-sofa"
                />
                <Product
                    title="Glass Coffee Table"
                    price="6000"
                    image="tableglass.glb"
                    addToCart={addToCartHandler}
                    id="glass-coffee-table"
                />
                <Product
                    title="Modern Bed Frame"
                    price="10000"
                    image="bed.glb"
                    addToCart={addToCartHandler}
                    id="modern-bed-frame" />
                <Product
                    title="Wardrobe Closet"
                    price="7000"
                    image="wardrobe.glb"
                    addToCart={addToCartHandler}
                    id="wardrobe-closet" />
                <Product
                    title="Dining Chair Set"
                    price="4500"
                    image="dining.glb"
                    addToCart={addToCartHandler}
                    id="dining-chair-set" />
            </div>

            <h1 className="text-4xl font-bold text-white text-center mt-20 mb-10">Electronics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
                <Product
                    title="Phone"
                    price="10000"
                    image="tableglass.glb"
                    addToCart={addToCartHandler}
                    id="chimney"
                />
                <Product
                    title="LED TV"
                    price="12000"
                    image="tableglass.glb"
                    addToCart={addToCartHandler}
                    id="led-tv"
                />
                <Product
                    title="Smart Clock"
                    price="5000"
                    image="tableglass.glb"
                    addToCart={addToCartHandler}
                    id="smart-clock"
                />
            </div>
        </div>
    );
}

export default Marketplace;

function Product({ id, title, price, image, addToCart }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const item = cartItems.find((item) => item.id === id);
    const initialQuantity = item ? item.quantity : 1;
    
    const [quantity, setQuantity] = useState(initialQuantity);
    const [showControls, setShowControls] = useState(false);

    const handleAddToCart = () => {
        dispatch({ type: "addToCart", payload: { id, title, price, quantity } });
        dispatch({ type: "calculatePrice" });
        setShowControls(true); 
    };

    const handleQuantityChange = (amount) => {
        const newQuantity = quantity + amount;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
            dispatch({ type: "updateQuantity", payload: { id, quantity: newQuantity } });
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <model-viewer
                src={image || 'loading.gif'}
                style={{
                    margin: "20px auto",
                    height: '200px',
                    backgroundColor: '#f3f4f6',
                    '--poster-color': '#ffffff00',
                }}
                ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                poster="logo.png"
                alt={title}
                shadow-intensity="1"
                camera-controls
                auto-rotate
                ar
            />
            <div className="px-10 pb-5">
                <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
                <span className="text-lg font-bold text-gray-800">Price: Rs. <span className="text-2xl">{price}</span></span>
                <div className="flex flex-col items-center justify-between mt-3">
                    {showControls && (
                        <div className="flex gap-2 items-center">
                            <button
                                onClick={() => handleQuantityChange(-1)}
                                className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(1)}
                                className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
                            >
                                +
                            </button>
                        </div>
                    )}
                    <div className="flex gap-2 mt-4">
                        <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition-colors duration-300 ease-in-out">View in AR</a>
                        <button
                            onClick={handleAddToCart}
                            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition-colors duration-300 ease-in-out"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



