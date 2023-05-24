// import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/report-1.png";
import "../styles/explore.css";

const Explore = () => {
  return (
    <main>
      <div className="explore">
        <div className=" explore__column-1">
          <img src={image} alt="" />
        </div>
        <div className='explore__column-2'>
          <div className="">
            <p className="explore__p">
              Join Citizen Report today and become an active participant in shaping the future of your community. <br />
              <br />
              Together, we can build stronger, safer, and more inclusive neighborhoods that we can all be proud of.
              Remember, your voice matters, and with Citizen Report, it will be heard.
            </p>
          </div>
          <div className="explore__cta">
            <Link to="/home" className="explore__cta-link">
              Report
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Explore;
