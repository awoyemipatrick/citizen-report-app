// import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/report-1.png";
// import "../styles/dashboard.css";
import "../styles/explore.css";


const Explore = () => {
  return (
    <main>
      <div className="container">
        <header>
          <div className="row">
            <div className="image column-1">
              <img src={image} alt="" />
            </div>
            <div className='column-2'>
              <p>
                Join Citizen Report today and become an active participant in shaping the future of your community.
                Together, we can build stronger, safer, and more inclusive neighborhoods that we can all be proud of.
                Remember, your voice matters, and with Citizen Report, it will be heard.
              </p>
              <Link to="/home" className="cta">
                Report
              </Link>
            </div>
          </div>
        </header>
      </div>
    </main>
  );
};

export default Explore;
