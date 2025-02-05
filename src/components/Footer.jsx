import React from "react";
import Logo from '../assets/images/furniro_logo.png';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

                <div>
                    <div className="flex items-center space-x-2">
                        <img src={Logo} alt="Logo" className="h-8" />
                        <span className="text-2xl font-bold">IOS INTERIORS</span>
                    </div>
                    <p className="mt-4 text-gray-600 text-left mt-15 text-sm">&copy; 2023 Sandbox.</p>
                    <p className="text-gray-600 text-left text-sm mt-2">All rights reserved.</p>
                </div>

                <div className="text-left ml-20">
                    <h3 className="text-lg font-semibold text-[#343F52]">Get in Touch</h3>
                    <address className="mt-4 text-[#60697B] not-italic leading-[28.9px] text-sm">
                        <p>Moonshine St. 14/05</p>
                        <p>Light City, London,</p>
                        <p>United Kingdom</p>

                    </address>
                    <div className="leading-[28.9px] mt-4 text-sm">
                        <p><a href="mailto:info@email.com" className="text-gray-600">info@email.com</a></p>
                        <p className="text-[#60697B]">00 (123) 456 78 90</p>
                    </div>
                </div>


                <div className="text-left ml-20">
                    <h3 className="text-lg font-semibold text-[#343F52]">Learn More</h3>
                    <ul className="mt-4 space-y-2 text-[#60697B] leading-[28.9px] text-sm">
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/our-story">Our Story</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/terms-of-use">Terms of Use</a></li>
                    </ul>
                </div>


                <div className="text-left w-60">
                    <h3 className="text-lg font-semibold text-[#343F52]">Our Newsletter</h3>
                    <p className="mt-4 text-sm text-[#60697B] leading-[28.9px]">Subscribe to our newsletter to get our news & deals delivered to you.</p>
                    <div className="flex items-center mt-4 w-full border border-white rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-2 text-gray-800 focus:outline-none"
                        />
                        <button className="p-2 !bg-orange-200 text-white">Join</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
