import React from 'react';

// cartcard to display all cart items
const CartCard = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {

    const handleIncrease = () => {
        increaseQuantity(item.id);
    };

    const handleDecrease = () => {
        decreaseQuantity(item.id);
    };

    const handleRemove = () => {
        removeItem(item.id);
    };

    return (
        <div className="card h-80 w-64 bg-white ring-1 ring-slate-900/5 shadow-lg rounded-md border mx-2 p-3 flex flex-col justify-between m-2">
            <div className="flex justify-center">
                <img src={item.img} alt={item.name} className="w-36 h-40 object-contain" />
            </div>
            <div>
                <h1 className="text-center text-xl font-semibold">{item.name}</h1>
                <p className="text-center text-gray-600">${item.price}</p>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center">
                    <button onClick={handleDecrease} className="bg-gray-300 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-400 transition duration-300">
                        -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={handleIncrease} className="bg-gray-300 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-400 transition duration-300">
                        +
                    </button>
                </div>
                <button onClick={handleRemove} className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-300">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartCard;
