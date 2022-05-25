import React from "react";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer p-4 bg-transparent w-fit mx-auto">
      <div className="items-center flex">
        <img src={logo} alt="DevQuests Logo" className="w-auto h-10 mr-2" />
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
