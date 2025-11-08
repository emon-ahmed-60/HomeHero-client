import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div className='container mx-auto px-5 flex flex-col justify-between min-h-screen'>
        <Navbar/>
        <div className='py-8'>
            <Outlet/>
        </div>
        <Footer/>
        <ToastContainer/>
        </div>
    );
};

export default RootLayout;