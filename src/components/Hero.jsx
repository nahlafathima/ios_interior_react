import React from 'react';
import background from '../assets/images/background.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="relative w-screen h-[calc(100vh-60px)] flex justify-center items-center mt-12 overflow-hidden">
            <div className="absolute top-0 w-full h-full ">
                <img src={background} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="relative max-w-[40%] text-center bg-[#FFF3E3] p-5 rounded-lg ml-[46%] mt-12 overflow-hidden">
                <h2 className="text-lg font-normal font-poppins mb-2 text-left tracking-[3px] leading-[24px] text-[#333333]">New Arrival</h2>
                <h1 className="text-5xl font-bold text-[#848385] mb-4 text-left">Discover Our<br /> New Collection</h1>
                <p className="text-sm leading-[24px] mb-4 text-[#333333] text-left">Discover timeless elegance in every piece, thoughtfully designed to complement your unique style and bring effortless sophistication to your wardrobe.</p>
                <button className="px-8 py-3 mr-90 w-50 h-15 text-sm font-bold text-[#1C1A1E] bg-[#FFE6D0] border-none cursor-pointer transition-all ease-in-out transform hover:bg-[#b58850] hover:scale-105">
                    BOOK NOW
                </button>
            </div>
        </div>
    );
}

export default Hero;
