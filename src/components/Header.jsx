import React from "react";
import HeaderLogo from "../assets/Knight cup logo.svg";

function Header() {
  return (
    <div className="bg-[#7025FB] py-[30px] pl-[60px]">
      <img src={HeaderLogo} alt="knight cup logo" />
    </div>
  );
}

export default Header;
