import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/UserContext";

const Followers = () => {
  const [authToken, setauthToken] = useState("");
  const uContext = useContext(userContext);
  const { user, getUser } = uContext;
  useEffect(() => {
    setauthToken(localStorage.getItem("authToken"));
    getUser(authToken);
  }, [authToken]);
  return (
    <div className="ml-[66.2px] p-[21px_40px_0]">
      <div className="text-[#2c3d4f] font-opensans text-[18px] font-semibold">
        Users Following You
      </div>
      <div className="user-followers-rows flex justify-center">
        {user.followers ? (
          user.followers.length > 0 ? (
            "Followers"
          ) : (
            <h1 className="text-[#222831] opacity-20 font-bold text-[50px] my-[42px]">
              No One Following You
            </h1>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Followers;
