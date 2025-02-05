import React from "react";
import image1 from "../assets/images/images1.png";
import image2 from "../assets/images/images2.png";
import image3 from "../assets/images/images3.png";
import image4 from "../assets/images/images4.png";
import image5 from "../assets/images/images5.png";
import image6 from "../assets/images/images6.png";
import image7 from "../assets/images/images7.png";
import image8 from "../assets/images/images8.png";
import image9 from "../assets/images/images9.png";

const ImageLayout = () => {
    return (
        <div className="relative w-full h-[700px] mx-auto pt-4 mt-8 ">

            <div className="text-center -mb-5">
                <h4 className="text-lg font-semibold text-[#616161] uppercase tracking-wider leading-[30px]">
                    Gallery
                </h4>
                <h1 className="text-4xl font-bold text-[#3A3A3A] leading-[48px]">#FuniroFurniture</h1>
            </div>


            <div className="relative w-full h-full">
                <img
                    src={image1}
                    alt="Furniture"
                    className="absolute top-0 left-0 w-[100px] h-[350px]"
                />
                <img
                    src={image2}
                    alt="Furniture"
                    className="absolute top-17 left-[110px] w-[400px] h-[280px]"
                />
                <img
                    src={image3}
                    alt="Furniture"
                    className="absolute top-35 left-[520px] w-[260px] h-[350px]"
                />
                <img
                    src={image4}
                    alt="Furniture"
                    className="absolute top-24 left-[790px] w-[250px] h-[300px]"
                />
                <img
                    src={image5}
                    alt="Furniture"
                    className="absolute top-0 left-[1050px] w-[270px] h-[395px]"
                />


                <img
                    src={image6}
                    alt="Furniture"
                    className="absolute top-[360px] left-0 w-[200px] h-[280px]"
                />
                <img
                    src={image7}
                    alt="Furniture"
                    className="absolute top-[360px] left-[210px] w-[300px] h-[200px]"
                />
                <img
                    src={image8}
                    alt="Furniture"
                    className="absolute top-[410px] left-[790px] w-[160px] h-[220px]"
                />
                <img
                    src={image9}
                    alt="Furniture"
                    className="absolute top-[410px] left-[960px] w-[230px] h-[180px]"
                />
            </div>
        </div>
    );
};

export default ImageLayout;
