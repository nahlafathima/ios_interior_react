import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/furniro_logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();


    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center bg-white p-4 fixed top-0 left-0 w-full h-24 z-10 shadow-md">

                <div className="flex items-center space-x-2 ml-8">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-8 cursor-pointer"
                        onClick={() => handleNavigation('/')}
                    />
                    <span className="text-black text-2xl font-bold">IOS INTERIORS</span>
                </div>

                <ul className={`flex gap-12 ml-30 text-black ${menuOpen ? 'block' : 'hidden'} md:flex`}>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => handleNavigation('/')}>Home</li>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => handleNavigation('/About')}>About</li>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => handleNavigation('/Projects')}>Projects</li>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => handleNavigation('/Service')}>Service</li>
                    <li className="cursor-pointer hover:text-orange-500" onClick={() => handleNavigation('/Contact')}>Contact</li>
                </ul>

                <button
                    onClick={() => handleNavigation('/')}
                    className="!bg-orange-200 text-gray-500 py-3 h-12 px-4 rounded-lg hover:bg-orange-500 transition-all"
                >
                    Get Started
                </button>

                <div className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
