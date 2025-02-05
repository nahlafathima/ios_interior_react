import React from "react";
import image1 from "../assets/images/img10.svg";
import image2 from "../assets/images/img11.svg";
import image3 from "../assets/images/img12.svg";
import handIcon from "../assets/images/iconarrow.png";

const PageLayout = () => {
    return (
        <div className="min-h-[800px] h-auto flex items-center justify-center bg-[#f7f7f7] mt-20">

            <div className="max-w-6xl flex flex-wrap md:flex-nowrap gap-20 items-center -mt-70 ">
                <div className="relative flex flex-col items-start space-y-6">
                    <div className="relative w-80 h-64 md:w-96 md:h-80 rounded-3xl overflow-hidden shadow-lg">
                        <img src={image1} alt="Interior 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative w-full flex">
                        <div className="absolute right-50 -mt-25 w-64 h-48 md:w-72 md:h-56 rounded-3xl overflow-hidden shadow-lg">
                            <img src={image2} alt="Interior 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-12 ml-34 w-48 h-36 md:w-56 md:h-48 rounded-3xl overflow-hidden shadow-lg">
                            <img src={image3} alt="Interior 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>


                <div className="max-w-lg  ">
                    <h2 className="text-3xl font-bold mt-50 text-left text-[#1F1F1F]">What We Do!</h2>
                    <p className="text-[#1C1D20] mt-3 leading-[28px] text-left">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>

                    <ul className="mt-4 space-y-2 ml-3 font-semibold text-sm text-[#494949] leading-[28px]">
                        <li className="flex items-center space-x-2 ">
                            <img src={handIcon} alt="Icon" className="w-3 h-3" />
                            <span>World Wide Donation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={handIcon} alt="Icon" className="w-3 h-3" />
                            <span>Various Industrial Applications</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={handIcon} alt="Icon" className="w-3 h-3" />
                            <span>Providing Solutions For Construction, Management</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={handIcon} alt="Icon" className="w-3 h-3" />
                            <span>Engineers design and build the structure</span>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold mt-8 text-left text-[#1F1F1F]">What You Can Do in!</h2>
                    <ul className="mt-4 space-y-2 ml-3 font-semibold text-sm text-[#494949] leading-[28px]">
                        <li className="flex items-center space-x-2">
                            <img src={handIcon} alt="Icon" className="w-3 h-3" />
                            <span>Certified & Awards winner</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={handIcon} alt="Icon" className="w-3 h-3" />
                            <span>Work with energetic team</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={handIcon} alt="Icon" className="w-3 h-3" />
                            <span>Just Because You Work Hard You'll Be Successful.</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={handIcon} alt="Icon" className="w-3 h-3" />
                            <span>For all your construction needs!</span>
                        </li>
                    </ul>

                    <button className="mt-6 mr-90 p-4 text-sm text-bold bg-[#FFE6D0] text-[#848385] shadow-md hover:bg-orange-200 transition whitespace-nowrap">
                        MORE EXPLORE
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PageLayout;
