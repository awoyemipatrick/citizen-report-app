import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="top__nav">
      <h2 className="home__header">Citizen Report: Empowering Community Engagement</h2>
        <marquee className="scrolls">
          <span className="scroll">Live incedent reports near you...</span>
          <span className="scroll">Community Engagement...</span>
          <span className="scroll">Simplified Reporting Process...</span>
        </marquee>
    </nav>
  );
};

export default Nav;
