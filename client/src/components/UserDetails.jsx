import React, { useContext, useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../styles/heatmap.css";
import Weblinks from "../constants/Weblinks";
import userContext from "../context/UserContext";
import UserBanner from "./UserBanner";
import LoginModal from "./LoginModal";

const UserDetails = () => {
  const [authToken, setauthToken] = useState("");
  const [editField, seteditField] = useState({
    description: false,
    weblinks: false,
    proffesionalDetails: false,
    password: false,
    interests: false,
  });
  const [showModal, setShowModal] = useState(false);
  const uContext = useContext(userContext);
  const { user, setUser, getUser, updateUser } = uContext;
  useEffect(() => {
    setauthToken(localStorage.getItem("authToken"));
    getUser(authToken);
  }, [authToken]);
  if (authToken) {
    return (
      <>
        <UserBanner
          firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
        />
        <div className="lg:px-[30px] lg:mx-[70px] px-[10px] mt-[30px]">
          <div className="about-me flex flex-col gap-4 overflow-y-hidden">
            <div className="flex justify-between">
              <div className="font-opensans text-[#2c3d4f] font-bold lg:text-[16px] text-[14px]">
                ABOUT ME
              </div>
              <button
                className="px-7 py-1 bg-button text-white rounded-md text-[13px]"
                onClick={() => {
                  seteditField({
                    ...editField,
                    description: !editField.description,
                  });
                  updateUser(user, authToken);
                }}
              >
                {editField.description ? "Save" : "Edit"}
              </button>
            </div>
            <div className="flex bg-white rounded-lg  p-3">
              <textarea
                name="description"
                id=""
                rows="4"
                value={user.description}
                onChange={(e) => {
                  setUser({ ...user, description: e.target.value });
                }}
                maxLength={2000}
                disabled={editField.description ? false : true}
                placeholder="Add something about you"
                className="lg:text-[16px] text-[14px] overflow-hidden  disabled:bg-white w-full h-[100px] flex resize-none overflow-x-hidden  rounded-md focus:outline-none placeholder:font-bold"
              ></textarea>
            </div>
          </div>
          <hr className="w-full h-[1px] mt-[26px] mb-[16px]" />
          <div className="user-heatmap text-white fill-white lg:text-[16px] text-[14px]">
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
              <button
                onClick={() => {
                  seteditField({
                    ...editField,
                    weblinks: !editField.weblinks,
                  });
                  updateUser(user, authToken);
                }}
                className="px-7 py-1 bg-button text-white rounded-md text-[13px]"
              >
                {editField.weblinks ? "Save" : "Edit"}
              </button>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1  gap-[10px_30px] ">
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
                        name={item.address}
                        value={user.weblinks ? user.weblinks[item.address] : ""}
                        onChange={(e) => {
                          setUser({
                            ...user,
                            weblinks: {
                              ...user.weblinks,
                              [e.target.name]: e.target.value,
                            },
                          });
                        }}
                        disabled={editField.weblinks ? false : true}
                        placeholder={item.name}
                        className="placeholder:font-light w-full disabled:bg-white focus:outline-none lg:text-[16px] text-[14px]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="w-full h-[1px] mt-[26px] mb-[16px]" />
          <div className="user-proffesional-details">
            <div className="flex  justify-between">
              <div className="font-opensans text-[#2c3d4f] font-bold lg:text-[16px] text-[14px]">
                PROFFESIONAL DETAILS
              </div>
              <button className="px-7 py-1 bg-button text-white rounded-md text-[13px]">
                Edit
              </button>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] font-medium text-[#2c3d4f]">
              <div className="flex flex-col lg:text-[16px] text-[14px] ">
                <div>Highest Education</div>
                <div className="bg-white mt-1 flex items-center justify-between p-[8px_16px] lg:text-[16px] text-[14px] rounded-lg">
                  <span>Primary</span>
                  <span className="bg-white">
                    <img
                      src="	https://www.cipherschools.com/static/media/BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:text-[16px] text-[14px] ">
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
          <hr className="w-full h-[1px] mt-[26px] mb-[16px] " />
          <div className="change-password lg:text-[16px] text-[14px]">
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
                        disabled={editField.password ? false : true}
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
              <div className="font-opensans text-[#2c3d4f] font-bold lg:text-[16px] text-[14px]">
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
      {showModal ? <LoginModal open={showModal} /> : null}
    </div>
  );
};

export default UserDetails;
