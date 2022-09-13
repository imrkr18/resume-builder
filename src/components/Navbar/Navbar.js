import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink
} from "./navbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require( "../images/cv4.png")} style={{width:'50px'}} alt="logo" />
        </NavLink>

        <Bars />

        <NavMenu>
          <NavLink to="/" >
            <span>R</span>esume <span>B</span>uilder
          </NavLink>
        </NavMenu>

        {/* <NavBtn>
          <NavBtnLink to="/" >Download</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
