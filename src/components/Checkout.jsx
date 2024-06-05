import React, { useState } from 'react';
import emptyCartImage from '../assets/cart.png';
import successImage from '../assets/order.png';

const Checkout = ({ cartItems, clearCart }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    //function to handle confirm order button
    const handleConfirmOrder = () => {
        setIsConfirmed(true);
    };


    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //function to handle submit form
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        clearCart();
    };

    return (
        <div className="container mx-auto m-5">
            <h2 className="text-3xl font-bold mb-4 text-center">Checkout</h2>
            <div className="bg-white p-6 rounded-md shadow-lg border-2 m-4 border-gray-300">
                {isConfirmed ? (
                    isFormSubmitted ? (
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">Order Placed Successfully!</h3>
                            <img src={successImage} alt="Success" className="mx-auto w-96 h-96" />
                        </div>
                    ) : (
                        <form onSubmit={handleSubmitForm}>
                            <h3 className="text-xl font-bold mb-4">Enter your details</h3>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone:</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleFormChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address:</label>
                                <input type="text" id="address" name="address" value={formData.address} onChange={handleFormChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" required />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                        </form>
                    )
                ) : (
                    <>
                        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                        {cartItems.length === 0 ? (
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">Your cart is empty</h3>
                                <img src={emptyCartImage} alt="Empty Cart" className="mx-auto w-96 h-96" />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between items-center border-b pb-2 mb-2">
                                        <div className="flex items-center">
                                            <img src={item.img} alt={item.name} className="w-16 h-16 object-contain mr-4" />
                                            <div>
                                                <h4 className="text-lg font-medium">{item.name}</h4>
                                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <p className="text-lg font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {cartItems.length > 0 && (
                            <div className="flex justify-between items-center mt-8">
                                <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
                                <button onClick={handleConfirmOrder} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
                                    Confirm Order
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Checkout;
