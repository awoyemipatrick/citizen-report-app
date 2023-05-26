import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/report.png";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import "../styles/dashboard.css";


const Dashboard = () => {
  return (
    <main className="dashboard__container">
      <div className="dashboard">
        <div className="dashboard__column1">
          <img src={image1} alt="people" />
        </div>

        <div className="dashboard__column2" >
          <div className="dashboard__intro">
            <h1 className="dashboard__intro-h1">
              Welcome to Citizen Report, your go-to platform for community-driven reporting and engagement. <br />
              <br />
              We believe that every citizen has the power to make a difference and contribute to the
              betterment of their community.
            </h1>
            <span className="dashboard__intro-span"> A hub for community engagement.</span>
          </div>
          <div className="dashboard__cta">
            <Link to="/explore" className="dashboard__cta-link">
              <HiOutlineArrowNarrowRight className="dashboard__link-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
