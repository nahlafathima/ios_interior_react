import React from "react";
import { FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa";
import person1 from "../assets/images/psn1.png";
import person2 from "../assets/images/psn2.png";
import person3 from "../assets/images/psn3.png";
import person4 from "../assets/images/psn4.png";
import d1 from "../assets/images/d1.svg";
import d2 from "../assets/images/d2.svg";
import d3 from "../assets/images/d3.svg";

const TeamSection = () => {
  return (
    <section className="w-full bg-white py-12 mt-30">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
        <div className="w-1/3 text-left">
          <h4 className="text-sm font-medium text-[#B88E2F]">COMPANY FACTS</h4>
          <h2 className="text-4xl font-bold text-[#343F52] mt-4 leading-[50.4px]">
            We are proud of our design team
          </h2>
          <p className="text-[#60697B] mt-4 leading-[28.9px]">
            Just sit back and relax while we take care of your business needs for you.
          </p>
        </div>


        <div className="w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0 ml-40">
          <div className="text-left">
            <div className="w-15 h-15  rounded-full flex items-center justify-center ml-8">
              <img src={d1} alt="Projects" />
            </div>
            <h3 className="text-4xl font-medium text-gray-800 mt-3 ml-4">1000+</h3>
            <p className="text-gray-600 mt-3 ">Completed Projects</p>
          </div>

          <div className="text-left">
            <div className="w-15 h-15 rounded-full flex items-center justify-center ml-6">
              <img src={d3} alt="Customers" />
            </div>
            <h3 className="text-4xl font-medium text-gray-800 mt-3 ml-4">50K+</h3>
            <p className="text-gray-600 mt-3">Happy Customers</p>
          </div>

          <div className="text-left">
            <div className="w-15 h-15 rounded-full flex items-center justify-center ml-4">
              <img src={d2} alt="Awards" />
            </div>
            <h3 className="text-4xl font-medium text-gray-800 mt-3 ml-4">20+</h3>
            <p className="text-gray-600 mt-3">Awards Won</p>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <img src={person1} alt="Person 1" className="w-22 h-22 rounded-full" />
          <h3 className="text-lg font-semibold text-[#343F52] mt-4">Coriss Ambady</h3>
          <p className="text-[#AAB0BC] text-xs leading-[23.8px]">FINANCIAL ANALYST</p>
          <p className="text-[#60697B] text-sm mt-2 leading-[28.9px]">
            Fermentum massa justo sit amet risus morbi leo.
          </p>
          <div className="flex gap-4 mt-4">
            <FaTwitter className="text-blue-500 cursor-pointer" />
            <FaFacebookF className="text-blue-700 cursor-pointer" />
            <FaDribbble className="text-pink-500 cursor-pointer" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <img src={person2} alt="Person 2" className="w-22 h-22 rounded-full" />
          <h3 className="text-lg font-semibold text-[#343F52] mt-4">Cory Zamora</h3>
          <p className="text-[#AAB0BC] text-xs leading-[23.8px]">MARKETING SPECIALIST</p>
          <p className="text-[#60697B] text-sm mt-2 leading-[28.9px]">
            Fermentum massa justo sit amet risus morbi leo.
          </p>
          <div className="flex gap-4 mt-4">
            <FaTwitter className="text-blue-500 cursor-pointer" />
            <FaFacebookF className="text-blue-700 cursor-pointer" />
            <FaDribbble className="text-pink-500 cursor-pointer" />
          </div>
        </div>


        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <img src={person3} alt="Person 3" className="w-22 h-22 rounded-full" />
          <h3 className="text-lg font-semibold text-[#343F52] mt-4">Nikolas Brooten</h3>
          <p className="text-[#AAB0BC] text-xs leading-[23.8px]">SALES MANAGER</p>
          <p className="text-[#60697B] text-sm mt-2 leading-[28.9px]">
            Fermentum massa justo sit amet risus morbi leo.
          </p>
          <div className="flex gap-4 mt-4">
            <FaTwitter className="text-blue-500 cursor-pointer" />
            <FaFacebookF className="text-blue-700 cursor-pointer" />
            <FaDribbble className="text-pink-500 cursor-pointer" />
          </div>
        </div>


        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <img src={person4} alt="Person 4" className="w-22 h-22 rounded-full" />
          <h3 className="text-lg font-semibold text-[#343F52] mt-4">Jackie Sanders</h3>
          <p className="text-[#AAB0BC] text-xs leading-[23.8px]">INVESTMENT PLANNER</p>
          <p className="text-[#60697B] text-sm mt-2 leading-[28.9px]">
            Fermentum massa justo sit amet risus morbi leo.
          </p>
          <div className="flex gap-4 mt-4">
            <FaTwitter className="text-blue-500 cursor-pointer" />
            <FaFacebookF className="text-blue-700 cursor-pointer" />
            <FaDribbble className="text-pink-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
