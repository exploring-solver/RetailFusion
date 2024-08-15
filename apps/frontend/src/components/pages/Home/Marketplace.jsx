import React from 'react';

function Marketplace() {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen p-10">
            <h1 className="text-4xl font-bold text-white text-center mb-10">Furniture Marketplace</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                <Product title="Wooden Chair" price="4000" image="chair.glb" />
                <Product title="Leather Sofa" price="8000" image="sofa.glb" />
                <Product title="Glass Coffee Table" price="6000" image="tableglass.glb" />
                <Product title="Modern Bed Frame" price="10000" image="bed.glb" />
                <Product title="Wardrobe Closet" price="7000" image="wardrobe.glb" />
                <Product title="Dining Chair Set" price="4500" image="dining.glb" />
            </div>

            <h1 className="text-4xl font-bold text-white text-center mt-20 mb-10">Component Marketplace</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
                <Product title="Chimney" price="10000" image="1.webp" />
                <Product title="LED TV" price="12000" image="2.jpeg" />
                <Product title="Smart Clock" price="5000" image="1.webp" />
                <Product title="Comfortable Chair" price="2500" image="2.jpeg" />
                <Product title="Home Theater System" price="15000" image="1.webp" />
                <Product title="Smart Refrigerator" price="9000" image="2.jpeg" />
            </div>
        </div>
    );
}

export default Marketplace;

function Product(props) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <model-viewer
                src={props.image || 'logo.png'}
                style={{
                    margin: "20px auto",
                    height: '200px',
                    backgroundColor: '#f3f4f6',
                    '--poster-color': '#ffffff00',
                }}
                ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                poster="logo.png"
                alt="mgcms"
                shadow-intensity="1"
                camera-controls
                auto-rotate
                ar
            />
            <div className="px-10 pb-5">
                <h5 className="text-lg font-semibold text-gray-800 dark:text-white">{props.title}</h5>
                <div className="flex flex-col items-center justify-between mt-3">
                    <span className="text-lg font-bold text-gray-800 dark:text-white">Price: Rs. <span className="text-2xl">{props.price}</span></span>
                    <a href="#" className="mt-4 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition-colors duration-300 ease-in-out">View in AR</a>
                </div>
            </div>
        </div>
    );
}
