import React, { useState } from 'react';

// creating a productcard to display all the products in the products list
const ProductCard = ({ product, addCartItems }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addCartItems({ ...product, quantity: 1 });
        setIsAdded(true);
    };

    return (
        <div className="card h-80 w-64 bg-white ring-1 ring-slate-900/5 shadow-lg rounded-md border mx-2 p-3 flex flex-col justify-between m-2">
            <div className="flex justify-center">
                <img src={product.img} alt={product.name} className="w-36 h-40 object-contain" />
            </div>
            <div>
                <h1 className="text-center text-xl font-semibold">{product.name}</h1>
                <p className="text-center text-gray-600">${product.price}</p>
            </div>

            <div className="flex flex-col justify-between h-full">
                <div className="flex justify-center items-center h-full">
                    <button onClick={handleAddToCart} disabled={isAdded} className={`bg-${isAdded ? 'green' : 'blue'}-500 text-white px-4 py-1 rounded-md hover:bg-${isAdded ? 'green' : 'blue'}-600 transition duration-300 ${isAdded ? 'disabled' : ''}`}>
                        {isAdded ? 'Added to cart' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
