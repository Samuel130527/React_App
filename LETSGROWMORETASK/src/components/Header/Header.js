import React from "react";
import "./Header.css";

const Header = ({ onButtonSubmit }) => {
  return (
    <nav className="header">
      <h3 className="name">LetsGrowMore_React_App</h3>
      <div className="btn-container">
        <button className="btn" onClick={onButtonSubmit}>
          GET USERS
        </button>
      </div>
    </nav>
  );
};

export default Header;
