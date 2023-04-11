import React from "react";
import SidebarLinks from "../constants/RightSidebarLinks";
import { useState } from "react";

const RightSidebar = () => {
  const [active, setactive] = useState("Profile");
  return (
    <div className="flex flex-col bg-white text-[#2c3d4f] pt-[0.8rem] fixed mt-[120px] right-0 justify-between h-[calc(100vh-59.8px)] font-sans border-l w-[67px] text-[9px] leading-[1.25]">
      <div className="absolute ml-[-29px] cursor-pointer top-0 w-[30px] h-[40px] bg-white flex justify-center items-center rounded-l-md border-b">
        <svg
          width="12"
          height="14"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="open rotate-180"
        >
          <path
            d="M6.71672 6.71713C7.10725 6.3266 7.10725 5.69344 6.71672 5.30291L2.12083 0.707019C1.73036 0.316554 1.09729 0.316554 0.706829 0.707019C0.316364 1.09748 0.316364 1.73055 0.706829 2.12102L3.89272 5.30691C4.28325 5.69744 4.28325 6.3306 3.89272 6.72113L0.706831 9.90702C0.316689 10.2972 0.317587 10.93 0.708834 11.319C1.09851 11.7065 1.72825 11.7056 2.11683 11.317L6.71672 6.71713Z"
            fill="black"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-between">
        {SidebarLinks.map((item) => {
          return (
            <div
              key={item.title}
              className={`text-[#2c3d4f] flex ${
                active == item.title ? "bg-button text-white" : ""
              } flex-col font-[600] hover:bg-sidebarTabHover mx-[5px] py-[5px] transition-colors cursor-pointer rounded-md text-center justify-center gap-[0.2rem] items-center`}
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
    </div>
  );
};

export default RightSidebar;
