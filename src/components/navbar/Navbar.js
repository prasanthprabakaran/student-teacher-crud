import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AppBar, Grid, Toolbar } from "@mui/material";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (

      <header className="navbar">
        <Grid container>
        <Link to="/">
          <h3 className="logo">Logo</h3>
        </Link>

        <ul
          className={mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/about" className="about">
            <li>About</li>
          </Link>
          <Link to="/contact" className="contact">
            <li>Contact</li>
          </Link>
          <Link to="/services" className="services">
            <li>Services</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross /> : <FaBars />}
        </button>
        </Grid>
      </header>
  );
};

export default Navbar;
