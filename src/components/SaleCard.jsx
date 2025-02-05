import React from 'react';
import image from '../assets/images/image1.png';

const SaleCard = () => {
    return (

        <div className="w-screen rounded-2xl overflow-hidden shadow-lg flex bg-[#FFE6D0] mt-17">
            <div className="w-1/3 p-8 flex flex-col justify-center text-left ml-20 w-80">
                <h4 className="text-sm font-semibold text-[#AAB0BC] mt-15">END OF SEASON SALE</h4>
                <h2 className="text-4xl font-semibold text-[#343F52] mt-10">Up to 60% Off</h2>
                <p className="text-lg text-gray-600 mt-10 leading-[34.1px]">
                    We bring solutions to make life easier for our customers.
                </p>
            </div>
            <div className="w-2/3 mt-25">
                <img src={image} alt="Sale Image" className="w-full h-full object-cover ml-4" />
            </div>
        </div>

    );
};

export default SaleCard;
