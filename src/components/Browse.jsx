import React from 'react';
import dining from '../assets/images/dining.png';
import living from '../assets/images/living.png';
import bedroom from '../assets/images/bedroom.png';

const Browse = () => {
    return (
        <div className=" px-16 text-center bg-white w-full mt-2">
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Browse The Range</h1>
            <p className="text-lg text-[#666666] mb-6">
                Discover a wide range of unique products tailored to suit your every need.
            </p>

            <div className="flex justify-center gap-6 flex-wrap mt-16">
                <div className="max-w-[300px] text-center text-black">
                    <img src={dining} alt="Dining" className="w-full rounded-lg transition-transform duration-300 hover:scale-105" />
                    <h2 className="text-xl mt-6 font-semibold ">Dining</h2>
                </div>
                <div className="max-w-[300px] text-center text-black">
                    <img src={living} alt="Living" className="w-full rounded-lg transition-transform duration-300 hover:scale-105" />
                    <h2 className="text-xl mt-6 font-semibold">Living</h2>
                </div>
                <div className="max-w-[300px] text-center text-black">
                    <img src={bedroom} alt="Bedroom" className="w-full rounded-lg transition-transform duration-300 hover:scale-105" />
                    <h2 className="text-xl mt-6 font-semibold">Bedroom</h2>
                </div>
            </div>
        </div>
    );
};

export default Browse;
