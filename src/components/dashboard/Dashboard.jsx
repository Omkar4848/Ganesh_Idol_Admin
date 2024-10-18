import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ProductForm from "./Sidebar/AddIdol";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard_div">
      <Sidebar/>
      <ProductForm/>
    </div>
  );
};

export default Dashboard;
