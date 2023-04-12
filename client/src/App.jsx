import React from "react";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import UserBanner from "./components/UserBanner";
import UserDetails from "./components/UserDetails";
import UserState from "./context/UserState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Followers from "./components/Followers";
const App = () => {
  return (
    <UserState>
      <Router>
        <Navbar />
        <LeftSidebar />
        <Routes>
          <Route
            path="/followers"
            element={
              <>
                <Followers />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <RightSidebar />
                <UserDetails />
              </>
            }
          />
        </Routes>
      </Router>
    </UserState>
  );
};

export default App;
