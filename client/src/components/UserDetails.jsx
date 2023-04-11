import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../styles/heatmap.css";
import Weblinks from "../constants/Weblinks";
import { loginUser } from "../utils/userDetails";
import UserBanner from "./UserBanner";
import LoginModal from "./LoginModal";

const UserDetails = () => {
  const [authToken, setauthToken] = useState(null);
  const [showModal, setShowModal] = useState(false);
  if (authToken) {
    return (
      <>
        <UserBanner />
        <div className="px-[30px] mx-[70px] mt-[30px]">
          <div className="about-me flex flex-col gap-4 ">
            <div className="flex justify-between">
              <div className="font-opensans text-[#2c3d4f] font-bold">
                ABOUT ME
              </div>
              <button className="px-7 py-1 bg-button text-white rounded-md text-[13px]">
                Edit
              </button>
            </div>
            <div className="flex bg-white rounded-lg  p-3">
              <textarea
                name=""
                id=""
                rows="4"
                placeholder="Add something about you"
                className="text-[14px] w-full h-[100px] flex resize-none overflow-x-hidden overflow-y-auto rounded-md focus:outline-none placeholder:font-bold"
              ></textarea>
            </div>
          </div>
          <hr className="w-full  h-[1px] mt-[26px] mb-[16px]" />
          <div className="user-heatmap text-white fill-white">
            <div className="font-opensans text-[#2c3d4f] font-bold">
              CIPHER MAP
            </div>
            <div className="max-h-[13rem]">
              <CalendarHeatmap
                showWeekdayLabels
                startDate={new Date().toDateString()}
                endDate={new Date(
                  new Date().setFullYear(new Date().getFullYear() + 1)
                ).toDateString()}
                values={[
                  { date: "2023-05-01", count: 1 },
                  { date: "2023-05-03", count: 4 },
                  { date: "2023-05-06", count: 2 },
                  // ...and so on
                ]}
                classForValue={(value) => {
                  if (!value) {
                    return "color-empty";
                  }
                  return `color-scale-${value.count}`;
                }}
              />
            </div>
            <div className="mp-heat-map-foot flex text-black items-center mt-1 font-light justify-end gap-1 font-opensans text-[14px]">
              <span className="px-[8px]">Less</span>
              <svg width="12" height="12">
                <rect width="12" height="12" fill="white"></rect>
              </svg>
              <svg width="12" height="12">
                <rect width="12" height="12" fill="#f3dcc4"></rect>
              </svg>
              <svg width="12" height="12">
                <rect width="12" height="12" fill="#e5b583"></rect>
              </svg>
              <svg width="12" height="12">
                <rect width="12" height="12" fill="#d48432"></rect>
              </svg>
              <svg width="12" height="12">
                <rect width="12" height="12" fill="#c87a2a"></rect>
              </svg>
              <span className="px-[8px]">More</span>
            </div>
          </div>
          <hr className="w-full h-[1px] mt-[26px] mb-[16px]" />
          <div>
            <div className="flex justify-between">
              <div className="font-opensans text-[#2c3d4f] font-bold">
                ON THE WEB
              </div>
              <button className="px-7 py-1 bg-button text-white rounded-md text-[13px]">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-3  gap-[10px_30px] ">
              {Weblinks.map((item) => {
                return (
                  <div className="text-[#2c3d4f] font-medium">
                    <div>{item.name}</div>
                    <div className="bg-white rounded-lg flex gap-2 p-[8px_16px] ">
                      <span>
                        <img src={item.icon} alt="" />
                      </span>
                      <input
                        type="url"
                        name=""
                        id=""
                        placeholder={item.name}
                        className="placeholder:font-light focus:outline-none"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="w-full h-[1px] mt-[26px] mb-[16px]" />
          <div className="user-proffesional-details">
            <div className="flex justify-between">
              <div className="font-opensans text-[#2c3d4f] font-bold">
                PROFFESIONAL DETAILS
              </div>
              <button className="px-7 py-1 bg-button text-white rounded-md text-[13px]">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-[30px] font-medium text-[#2c3d4f]">
              <div className="flex flex-col ">
                <div>Highest Education</div>
                <div className="bg-white mt-1 flex items-center justify-between p-[8px_16px] rounded-lg">
                  <span>Primary</span>
                  <span className="bg-white">
                    <img
                      src="	https://www.cipherschools.com/static/media/BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div>What do you do currently?</div>
                <div className="bg-white mt-1 flex items-center justify-between p-[8px_16px] rounded-lg">
                  <span>College Student</span>
                  <span className="bg-white">
                    <img
                      src="	https://www.cipherschools.com/static/media/BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full h-[1px] mt-[26px] mb-[16px]" />
          <div className="change-password">
            <div className="flex justify-between">
              <div className="font-opensans text-[#2c3d4f] font-bold">
                PASSWORD & SECURITY
              </div>
              <button className="px-7 py-1 bg-button text-white rounded-md text-[13px]">
                Change
              </button>
            </div>
            <div>
              <div className=" font-medium text-[#2c3d4f]">
                <div className="flex flex-col ">
                  <div>Password</div>
                  <div className="bg-white mt-1 flex items-center justify-between p-[8px_16px] rounded-lg">
                    <span>
                      <input
                        type="password"
                        name=""
                        id=""
                        value={"..................."}
                        className="focus:outline-none"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full h-[1px] mt-[26px] mb-[16px]" />
          <div className="user-interests mb-16">
            <div className="flex justify-between">
              <div className="font-opensans text-[#2c3d4f] font-bold">
                INTERESTS
              </div>
              <button className="px-7 py-1 bg-button text-white rounded-md text-[13px]">
                Edit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-59.8px)] items-center font-opensans justify-center text-[#2c3d4f]">
      <div className="text-[50px] font-bold opacity-20">Log In to Continue</div>
      <div
        className="bg-button text-white p-2 px-5 rounded-lg cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        Login
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-button text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default UserDetails;
