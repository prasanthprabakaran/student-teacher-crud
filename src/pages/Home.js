import React from "react";
import "./home.css";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
};

export default Home;
