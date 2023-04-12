import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const [user, setUser] = useState({});
  const getUser = async (authToken) => {
    const response = await fetch(`http://127.0.0.1:3000/api/auth/getUser`, {
      method: "POST",
      headers: {
        "auth-token": authToken,
      },
    });
    const data = await response.json();
    setUser(data);
  };
  const updateUser = async (user, authToken) => {
    const response = await fetch("http://127.0.0.1:3000/api/auth/updateUser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({
        weblinks: {
          linkedIn: user.weblinks.linkedIn,
          github: user.weblinks.github,
          facebook: user.weblinks.facebook,
          twitter: user.weblinks.twitter,
          instagram: user.weblinks.instagram,
          website: user.weblinks.website,
        },
        description: user.description,
        interestes: [],
        education: "",
        job: "",
        followers: [],
      }),
    });
    const data = await response.json();
    setUser(user);
  };
  return (
    <UserContext.Provider value={{ user, setUser, getUser, updateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
