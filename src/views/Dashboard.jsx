// import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/report.png";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <main>
      <div className="container">
        <header>
          <div className="row">
            <div className="image">
              <img src={image1} alt="people" />
            </div>
            <div className="text">
              <h1>
                Welcome to Citizen Report, your go-to platform for community-driven reporting and engagement.
                We believe that every citizen has the power to make a difference and contribute to the
                betterment of their community.
              </h1>
              <span>Be Informed, Stay Safe</span>
              <Link to="/explore" className="cta">
                <HiOutlineArrowNarrowRight className="link-arrow" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </main>
  );
};

export default Dashboard;
