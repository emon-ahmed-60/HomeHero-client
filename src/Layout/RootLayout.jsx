import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='container mx-auto px-5 flex flex-col justify-between min-h-screen'>
        <Navbar/>
        <div className=''>
            <Outlet/>
        </div>
        <Footer/>
        </div>
    );
};

export default RootLayout;