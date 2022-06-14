import React from "react";
import { Link } from "react-router-dom";
import {} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="row">
        <div className="">
          <p className="">
            copyright &copy; {new Date().getFullYear()}{" "}
            <span>,wedding photography team.</span>
          </p>
        </div>
        <div className="">
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/service">Services</Link>
          <Link to="review">Get Review</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
