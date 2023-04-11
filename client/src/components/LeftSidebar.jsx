import React from "react";
import SidebarLinks from "../constants/LeftSidebarLinks";
import { logout } from "../assets";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col  bg-white text-[#2c3d4f] pt-[0.8rem] z-[9999] fixed overflow-hidden justify-between shadow-lg h-[calc(100vh-59.8px)] font-sans border-r w-[67px] text-[9px] leading-[1.25]">
      <div className="flex flex-col justify-between">
        {SidebarLinks.map((item) => {
          return (
            <div
              key={item.title}
              className="text-[#2c3d4f] flex flex-col font-[600] hover:bg-sidebarTabHover mx-[5px] py-[5px] transition-colors cursor-pointer rounded-md text-center justify-center gap-[0.2rem] items-center"
            >
              <img
                src={item.src}
                alt={item.title}
                className="text-[#2c3d4f] w-[18px] h-[27px]"
              />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className="mx-[3px ">
        <hr className="bg-[#2c3d4f] w-full mb-1 h-[1px]" />
        <div className="flex text-[#2c3d4f] flex-col mb-2 cursor-pointer text-center justify-center py-[5px] hover:bg-sidebarTabHover transition-colors rounded-md gap-[0.2rem] items-center mx-[2px]">
          <img
            src={logout}
            alt="logout"
            className="text-[#2c3d4f] w-[25px] h-[25px]"
          />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
