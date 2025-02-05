import React from "react";
import logo1 from "../assets/images/c1.png.png";
import logo2 from "../assets/images/c2.png.png";
import logo3 from "../assets/images/c3.png.png";
import logo4 from "../assets/images/c4.png.png";
import logo5 from "../assets/images/c5.png.png";
import logo6 from "../assets/images/c6.png.png";
import logo7 from "../assets/images/c7.png.png";

const Clients = () => {
    return (
        <div className="pt-8 bg-white text-center">
            <h3 className="text-[#60697B] text-lg font-medium">
                Trusted by over 2K+ clients across the world
            </h3>
            <div className="flex justify-center items-center gap-8 mt-10 flex-wrap ">
                <img src={logo1} alt="Client 1" className="h-7 opacity-70" />
                <img src={logo2} alt="Client 2" className="h-7 opacity-70" />
                <img src={logo3} alt="Client 3" className="h-7 opacity-70" />
                <img src={logo4} alt="Client 4" className="h-7 opacity-70" />
                <img src={logo5} alt="Client 5" className="h-7 opacity-70" />
                <img src={logo6} alt="Client 6" className="h-7 opacity-70" />
                <img src={logo7} alt="Client 7" className="h-7 opacity-70" />
            </div>
        </div>
    );
};

export default Clients;
