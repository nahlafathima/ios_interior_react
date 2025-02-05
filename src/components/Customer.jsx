import React from 'react';
import img1 from '../assets/images/img1.svg';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.svg';
import underline from '../assets/images/underline.png';

const Customer = () => {
    return (
        <div className="bg-white px-4 mt-22">

            <div className="text-center mb-12 w-150 ml-70">
                <h2 className="text-[37px] font-semibold text-[#343F52] leading-[50.4px]">
                    Here are a few reasons why our customers choose iOS
                </h2>

                <img src={underline} alt="Reasons Image" className=" -mt-15 w-37 ml-70" />
            </div>


            <div className="flex justify-center space-x-5 p-18">
                <div className="bg-white shadow-md rounded-lg p-4 w-90 h-36">
                    <div className="flex items-center space-x-4 ">
                        <img src={img1} alt="Customer 1" className="h-15 w-15 rounded-full -mt-11" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 text-left">Beds</h3>
                            <p className="text-gray-600 mt-1 w-60 text-left">Duis mollis commodo lactus cursus commodo tortur mauris.</p>
                        </div>
                    </div>
                </div>


                <div className="bg-white shadow-md rounded-lg p-4 w-90 h-36">
                    <div className="flex items-center space-x-4 ">
                        <img src={img2} alt="Customer 1" className="h-15 w-15 rounded-full -mt-11" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 text-left">Sofa</h3>
                            <p className="text-gray-600 mt-1 w-60 text-left">Duis mollis commodo lactus cursus commodo tortur mauris.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-4 w-90 h-36">
                    <div className="flex items-center space-x-4 ">
                        <img src={img3} alt="Customer 1" className="h-14 w-14 rounded-full -mt-11" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 text-left">Lamp</h3>
                            <p className="text-gray-600 mt-1 w-60 text-left">Duis mollis commodo lactus cursus commodo tortur mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
