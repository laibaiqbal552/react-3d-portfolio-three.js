import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 flex bg-primary fixed top-0 z-20`}
    >
      <div className="w-full flex max-w-7xl mx-auto justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 object-contain">
            <img src={logo} alt="logo" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
