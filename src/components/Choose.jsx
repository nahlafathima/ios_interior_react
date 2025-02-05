import React from 'react';
import image from '../assets/images/img9.png';
import arrowIcon from '../assets/images/1icon.png';

const Choose = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-6 md:px-12 lg:px-24 py-16">
            <div className="lg:w-4/5 w-full">
                <img
                    src={image}
                    alt="Why Choose Us"
                    className="w-full h-[460px] object-cover rounded-lg"
                />
            </div>


            <div className="lg:w-1/2 w-full text-gray-900 ml-2 mt-10">
                <h4 className="text-sm font-semibold text-[#848385] uppercase text-left">Why Choose Us?</h4>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug text-left text-[#343F52]">
                    We bring solutions to <br /> make life easier.
                </h2>


                <div className="mt-6 space-y-4">
                    <details className="group pt-4">
                        <summary className="flex items-center cursor-pointer text-lg font-medium text-gray-700 gap-3">
                            <img
                                src={arrowIcon}
                                alt="Toggle"
                                className="w-4 h-8 group-open:rotate-180 transition-transform"
                            />
                            <span>Professional Design</span>
                        </summary>
                        <p className="text-gray-600 mt-2 text-left ml-7">
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                            ut fermentum massa justo sit amet risus.
                        </p>
                    </details>

                    <details className="group pt-4">
                        <summary className="flex items-center cursor-pointer text-lg font-medium text-gray-700 gap-3">
                            <img
                                src={arrowIcon}
                                alt="Toggle"
                                className="w-4 h-8 group-open:rotate-180 transition-transform"
                            />
                            <span>Top-Notch Support</span>
                        </summary>
                        <p className="text-gray-600 mt-2 text-left ml-7">
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                            ut fermentum massa justo sit amet risus.
                        </p>
                    </details>

                    <details className="group pt-4">
                        <summary className="flex items-center cursor-pointer text-lg font-medium text-gray-700 gap-3">
                            <img
                                src={arrowIcon}
                                alt="Toggle"
                                className="w-4 h-8 group-open:rotate-180 transition-transform"
                            />
                            <span>Header and Slider Options</span>
                        </summary>
                        <p className="text-gray-600 mt-2 text-left ml-7">
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                            ut fermentum massa justo sit amet risus.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Choose;
