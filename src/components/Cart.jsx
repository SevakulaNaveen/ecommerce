import React from 'react';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';
import emptyCartImage from '../assets/cart.png'

const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, removeItem }) => {

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    return (
        <div className="container mx-auto m-5">
            {cartItems.length === 0 ? (
                <div className="text-center  ">
                    <h2 className="text-3xl font-bold mb-4 mt-16"> Your Cart is empty</h2>
                    <img src={emptyCartImage} alt="Empty Cart" className="mx-auto w-96 h-96 " />
                </div>
            ) : (
                <>
                    <h2 className="text-3xl font-bold mb-4 text-center">My Cart</h2>
                    <div className="bg-white p-6 rounded-md shadow-lg border-2 border-gray-300 m-4" >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {cartItems.map(item => (
                                <CartCard
                                    key={item.id}
                                    item={item}
                                    increaseQuantity={increaseQuantity}
                                    decreaseQuantity={decreaseQuantity}
                                    removeItem={removeItem}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-8">
                            <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
                            <Link to="/checkout" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
