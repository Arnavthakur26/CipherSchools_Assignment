import React from "react";

const UserDetails = () => {
  return (
    <div>
      <div className="about-me flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="font-opensans text-[#2c3d4f] font-extrabold">
            ABOUT ME
          </div>
          <button className="px-7 py-1 bg-button text-white rounded-lg text-[13px]">
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
    </div>
  );
};

export default UserDetails;
