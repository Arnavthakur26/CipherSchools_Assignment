import React from "react";
import { Link } from "react-router-dom";

const UserBanner = ({ firstname, lastname, email }) => {
  return (
    <div className="pf-user-box lg:ml-[66.2px] lg:min-h-[110px] bg-white sticky lg:top-[59.8px] border-b border-[rgba(10,30,50,.1)] ">
      <div className="pf-user-back bg-cover bg-[50%] bg-[url(https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png)] flex justify-between flex-[1_1] ">
        <div className="userbox-left bg-gradient-to-r from-white to-transparent lg:pt-4 lg:pl-10 pl-[10px] pt-[10px] flex lg:gap-[30px] gap-[10px]">
          <div>
            <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] flex items-center justify-center bg-[#bdbdbd]  rounded-full">
              <svg
                className="lg:w-[52px] lg:h-[52px] w-[38px] h-[38px]"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="w-max rounded-full bg-[#202b47] p-[0.4rem] relative bottom-3 lg:left-5 left-4">
              <svg
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pf-profile-pencil-icon lg:w-[14px] lg:h-[14px] w-[10px] h-[10px]"
              >
                <path
                  d="M1.61176 17.6959L0.0393491 24.4821C-0.0148937 24.7301 -0.0130342 24.9872 0.0447916 25.2345C0.102617 25.4817 0.214949 25.713 0.37358 25.9112C0.532211 26.1095 0.733134 26.2699 0.961672 26.3806C1.19021 26.4913 1.44059 26.5495 1.69452 26.551C1.81284 26.563 1.93206 26.563 2.05038 26.551L8.87795 24.9786L21.9869 11.9194L14.671 4.62006L1.61176 17.6959Z"
                  fill="white"
                ></path>
                <path
                  d="M26.1082 5.38144L21.2255 0.498692C20.9045 0.179298 20.4701 0 20.0172 0C19.5644 0 19.13 0.179298 18.809 0.498692L16.0945 3.21317L23.402 10.5207L26.1165 7.80626C26.2754 7.6466 26.4012 7.45718 26.4868 7.24885C26.5723 7.04052 26.616 6.81735 26.6152 6.59213C26.6144 6.36691 26.5693 6.14405 26.4823 5.93631C26.3953 5.72856 26.2682 5.54001 26.1082 5.38144Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div className="user-greeting text-[#2c3d4f] leading-[1.25]">
            <div className="lg:text-[20px] text-[17px]">Hello,</div>
            <div className="font-extrabold font-opensans lg:text-[24px] text-[16px]">
              {firstname} {lastname}
            </div>
            <div className="text-[14px]">{email}</div>
          </div>
        </div>
        <Link to={"/followers"}>
          <div className="userbox-right bg-gradient-to-l pr-[30px] from-white to-transparent lg:flex hidden items-center justify-center pl-20">
            <div className="text-[17px] font-[550]">0 Followers</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserBanner;
