import React from 'react';

const Card = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white -mt-15">
            <div className="text-center p-6  rounded-lg bg-white shadow-lg w-[950px] h-[350px] !bg-[#FFF2E3]">
                <h4 className="text-sm font-medium mb-4 text-[#848385] mt-16">JOIN OUR COMMUNITY</h4>
                <h2 className="text-3xl font-semibold mb-4 text-[#343F52] leading-[29.5px]" >We are trusted by over 5000+ clients</h2>
                <h2 className="text-3xl font-semibold mb-6 text-[#343F52] ">Join them now and grow your business</h2>
                <button className="mt-4 px-6 py-3 !bg-orange-200 text-white font-semibold rounded-lg hover:bg-blue-600">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Card;
