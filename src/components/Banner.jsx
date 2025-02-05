import React from 'react';
import banner from '../assets/images/banner.png';
import logo1 from '../assets/images/furniro_logo.png';
import { useNavigate } from 'react-router-dom';

const Banner2 = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative w-full h-[400px] overflow-hidden mt-[7%] pb-[8%] bg-white md:h-[300px] sm:h-[250px] sm:pb-0 ">
            <div className="w-full h-full">
                <img src={banner} alt='banner' className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black px-4">
                <img src={logo1} alt='logo' className="mx-auto mb-2" />
                <h1 className="text-4xl font-semibold md:text-3xl sm:text-2xl">About Us</h1>
                <p className="text-lg font-normal mt-2 sm:text-sm">
                    <span className="cursor-pointer" onClick={() => handleNavigation('/')}>Home</span> &gt; <span>About</span>
                </p>
            </div>
        </div>
    );
};

export default Banner2;
