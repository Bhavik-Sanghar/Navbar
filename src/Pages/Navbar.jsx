import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav id="menu">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/about"> About </NavLink>
        <NavLink to="/contact"> Contact </NavLink>
        <NavLink to="/skills"> Skills </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
