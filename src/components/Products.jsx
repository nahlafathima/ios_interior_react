import React from 'react';
import image1 from '../assets/images/i1.png';
import image2 from '../assets/images/i2.png';
import image3 from '../assets/images/i3.png';
import image4 from '../assets/images/i4.png';
import image5 from '../assets/images/i5.png';
import image6 from '../assets/images/i6.png';
import image7 from '../assets/images/i7.png';
import image8 from '../assets/images/i8.png';

const product = [
    { id: 1, name: "Syltherine", category: "Stylish cafe chair", image: image1 },
    { id: 2, name: "Lolito", category: "Luxury big sofa", image: image2 },
    { id: 3, name: "Respira", category: "Outdoor bar table and stool", image: image3 },
    { id: 4, name: "Lolito", category: "Luxury big sofa", image: image4 },
    { id: 5, name: "Grifo", category: "Night lamp", image: image5 },
    { id: 6, name: "Muggo", category: "Small mug", image: image6 },
    { id: 7, name: "Pingky", category: "Cute bed set", image: image7 },
    { id: 8, name: "Potty", category: "Sofa set", image: image8 }
];

const Products = () => {
    return (
        <div className="max-w-[90%] mx-auto py-12">
            <h1 className="text-4xl font-bold text-center text-[#3A3A3A] mb-6 mt-2">Our Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                {product.map((product) => (
                    <div
                        key={product.id}
                        className="w-full md:w-[250px] lg:w-[260px] bg-gray-100 overflow-hidden transform transition duration-300 hover:scale-105 shadow-md"
                    >
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                        <div className="p-4 text-left leading-[28.8px]">
                            <h2 className="text-lg font-semibold text-[#3A3A3A]">{product.name}</h2>
                            <p className="text-sm text-[#898989]">{product.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <button className="px-7 py-3 border border-[#FFE6D0] text-[#B88E2F] !text-bold text-lg bg-white  hover:bg-orange-100 transition w-60">
                    Show More
                </button>
            </div>
        </div>
    );
};

export default Products;
