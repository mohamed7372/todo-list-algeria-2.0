import React from "react";
import ImageCard from "../components/ImageCard";
import IMAGES from "../assets/constants/images";
import ICONS from "../assets/constants/icons";

const Sidebar = () => {
  return (
    <div className="bg-[#1A1244] w-full h-screen text-white flex flex-col py-10 justify-between space-y-6 px-14">
      <div className="space-y-4 w-full">
        <ImageCard percent={10} />
        <h1 className="font-semibold flex flex-col">
          <span className="text-3xl">BENRABAH</span>
          <span className="text-xl">Mohamed</span>
        </h1>
      </div>
      <div>
        <ul className="space-y-6">
          <li className="text-lg space-x-4 flex items-center hover:text-primary-100 hover:bg-primary-100/20 py-2 rounded-lg cursor-pointer hover:pl-10 transform duration-300">
            <img src={ICONS.CATEGORY} alt="" className="w-8" />
            <p>Categories</p>
          </li>
          <li className="text-lg space-x-4 flex items-center hover:text-primary-100 hover:bg-primary-100/20 py-2 rounded-lg cursor-pointer hover:pl-10 transform duration-300">
            <img src={ICONS.GITHUB} alt="" className="w-8" />
            <p>Code source</p>
          </li>
          <li className="text-lg space-x-4 flex items-center hover:text-primary-100 hover:bg-primary-100/20 py-2 rounded-lg cursor-pointer hover:pl-10 transform duration-300">
            <img src={ICONS.PORTFOLIO} alt="" className="w-8" />
            <p>My portfolio</p>
          </li>
          <li className="text-lg space-x-4 flex items-center hover:text-primary-100 hover:bg-primary-100/20 py-2 rounded-lg cursor-pointer hover:pl-10 transform duration-300">
            <img src={ICONS.SETTINGS} alt="" className="w-8" />
            <p>Settings</p>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://2024.algeria20.com/?fbclid=IwY2xjawGh3lBleHRuA2FlbQIxMAABHWQ-MrwDfEgQ0owIvChYZ9vC3qj7vz2jvC4i8vPNymKBPIJTQlHK-Ygcuw_aem_2wCf5IWghP2lpp-CfLxP0Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={IMAGES.LOGO} alt="" className="w-[90px] object-cover" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
