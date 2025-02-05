import React from 'react';
import lamp from '../assets/images/img6.png';
import plant from '../assets/images/img7.svg';
import chandelier from '../assets/images/img8.svg';

const Service = () => {
    return (
        <section className="py-12 bg-white text-center">
            <h4 className="text-sm font-medium font-urbanist text-[#848385] -mt-4">WHAT WE DO?</h4>
            <h2 className="text-3xl font-semibold text-[#343F52] md:text-4xl mt-2 font-urbanist leading-[50.4px]">
                The service we offer is specifically <br /> designed to meet your needs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-12 px-6 md:px-12 lg:px-24">
                <div className="text-center">
                    <img src={lamp} alt="Lamp" className="h-48 w-72 mx-auto object-contain" />
                    <h3 className="text-xl font-semibold text-gray-900 mt-6">Eidea of</h3>
                    <p className="text-gray-600 mt-2 leading-[28.9px] text-[#60697B]">
                        Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.
                    </p>
                    <p className="mt-4 font-medium cursor-pointer text-[#848385]">Learn More →</p>
                </div>
                <div className="text-center">
                    <img src={plant} alt="Plant" className="h-48 w-72 mx-auto object-contain" />
                    <h3 className="text-xl font-semibold text-gray-900 mt-6">Felis eget</h3>
                    <p className="text-gray-600 mt-2 leading-[28.9px] text-[#60697B]">
                        Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.
                    </p>
                    <p className="mt-4  font-medium cursor-pointer text-[#848385]">Learn More →</p>
                </div>
                <div className="text-center">
                    <img src={chandelier} alt="Chandelier" className="h-48 w-72 mx-auto object-contain" />
                    <h3 className="text-xl font-semibold text-gray-900 mt-6">In egestas</h3>
                    <p className="text-gray-600 mt-2 leading-[28.9px] text-[#60697B]">
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.
                    </p>
                    <p className="mt-4 font-medium cursor-pointer text-[#848385]">Learn More →</p>
                </div>
            </div>
        </section>
    );
};

export default Service;
