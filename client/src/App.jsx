import React from "react";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import UserBanner from "./components/UserBanner";
import UserDetails from "./components/UserDetails";
const App = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <UserBanner />
      <div className="px-[30px] mx-[70px] mt-[30px]">
        <UserDetails />
      </div>
    </div>
  );
};

export default App;
