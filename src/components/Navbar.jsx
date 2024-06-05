import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    //using uselocation hook to trace the path
    const location = useLocation();

    return (
        <nav className="bg-blue-400 p-4 text-white flex justify-between">

            <div className="text-xl font-bold ml-10 flex items-center">
                My Shoppy
            </div>

            <div className='text-lg flex-grow flex justify-center items-center font-semibold'>
                <Link to="/" className={`mr-4 ${location.pathname === '/' ? 'active' : ''}`}>
                    Products
                </Link>
                <Link to="/cart" className={`mr-4 ${location.pathname === '/cart' ? 'active' : ''}`}>
                    Cart
                </Link>
                <Link to="/checkout" className={`mr-4 ${location.pathname === '/checkout' ? 'active' : ''}`}>
                    Checkout
                </Link>
            </div>

            <div className='mr-20 text-lg flex items-center'>
                <button className="bg-transparent border border-blue-500 rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-300">
                    Login
                </button>
            </div>

            <style>
                {`
                    .active {
                        text-decoration: underline;
                    }
                `}
            </style>
        </nav>
    );
};

export default Navbar;
