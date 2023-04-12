import React, { useState } from "react";
import { loginUser } from "../utils/userDetails";

export default function Modal({ open }) {
  const [showModal, setShowModal] = useState(open);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-[1.5em] gap-[5px] font-opensans">
            <div className="bg-white rounded-3xl  w-[45%] p-[1.5em]">
              <div className="modal-header flex justify-between text-[#2c3d4f] text-[24px] font-medium">
                <span>SignIn</span>
                <span
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="cursor-pointer"
                >
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3495 9.99858L19.5103 2.85447C19.8238 2.54089 20 2.11558 20 1.67211C20 1.22864 19.8238 0.80333 19.5103 0.489749C19.1967 0.176168 18.7714 0 18.3279 0C17.8844 0 17.4591 0.176168 17.1455 0.489749L10.0014 7.65052L2.85731 0.489749C2.54373 0.176168 2.11842 -3.30411e-09 1.67495 0C1.23148 3.30411e-09 0.806172 0.176168 0.492591 0.489749C0.17901 0.80333 0.00284199 1.22864 0.00284199 1.67211C0.00284199 2.11558 0.17901 2.54089 0.492591 2.85447L7.65336 9.99858L0.492591 17.1427C0.336506 17.2975 0.212618 17.4817 0.128073 17.6846C0.0435283 17.8875 0 18.1052 0 18.3251C0 18.5449 0.0435283 18.7626 0.128073 18.9655C0.212618 19.1684 0.336506 19.3526 0.492591 19.5074C0.647402 19.6635 0.831585 19.7874 1.03452 19.8719C1.23745 19.9565 1.45511 20 1.67495 20C1.89479 20 2.11245 19.9565 2.31538 19.8719C2.51832 19.7874 2.7025 19.6635 2.85731 19.5074L10.0014 12.3466L17.1455 19.5074C17.3003 19.6635 17.4845 19.7874 17.6875 19.8719C17.8904 19.9565 18.1081 20 18.3279 20C18.5477 20 18.7654 19.9565 18.9683 19.8719C19.1713 19.7874 19.3554 19.6635 19.5103 19.5074C19.6663 19.3526 19.7902 19.1684 19.8748 18.9655C19.9593 18.7626 20.0028 18.5449 20.0028 18.3251C20.0028 18.1052 19.9593 17.8875 19.8748 17.6846C19.7902 17.4817 19.6663 17.2975 19.5103 17.1427L12.3495 9.99858Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="auth-content flex flex-col text-[25px] pt-[10px]">
                <div className="auth-logo">
                  <div className="flex gap-1 justify-center items-center">
                    <img
                      src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                      alt="logo"
                      width={30}
                      height={30}
                    />
                    <span className=" text-[#2c3d4f] text-[24px] font-medium">
                      CipherSchools
                    </span>
                  </div>
                  <div className="user-greeting mt-[16px] flex flex-col items-center  justify-center text-[#2c3d4f]">
                    <span className="text-[18px] text-[rgba(8,15,15,.85)] font-semibold">
                      Hey, Welcome!
                    </span>
                    <span className="text-[14px] mb-[16px] mt-[5px] text-[rgba(8,15,15,.75)]">
                      Please provide your email and password to signin
                    </span>
                  </div>
                </div>
                <div className="userl-login-form flex flex-col gap-[5px] text-[15px]">
                  <div className="input-row rounded-[13px] px-[10px]  bg-[#f2f5fa] my-[10px] border">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Id"
                      className="bg-transparent focus:outline-none py-[10px] w-full"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="input-row  bg-[#f2f5fa] my-[10px] px-[10px] rounded-[13px] border ">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="bg-transparent focus:outline-none w-full py-[10px]"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="text-[#f3912e] leading-[1.25] text-right">
                    Forgot Password?
                  </div>
                  <button
                    onClick={async () => {
                      await loginUser(credentials.email, credentials.password);
                      setShowModal(false);
                      window.location.reload();
                    }}
                    className="bg-button w-full text-[14px] text-white py-[10px] rounded-[13px] hover:opacity-75 transition"
                  >
                    Signin
                  </button>
                  <div className="text-center my-[10px]">
                    <span>Don't have an account? </span>
                    <span className="text-[#f3912e] cursor-pointer">
                      Get Started
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
