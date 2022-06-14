import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomLink from "../../../CustomLink/CustomLink";
import weddingIcon from "../../../Image/wedding-icon.png";
import { signOut } from 'firebase/auth';
import "./Header.css";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
   
  };
  console.log(user);
  return (
    <div className="">
      <Navbar fixed="top" className=" bg-white" expand="lg">
        <Container fluid>
          <Navbar.Brand className="d-flex navBer-brand" href="/">
            <img height={30} src={weddingIcon} alt="" />
            <h3 className="col-sm-none">
              Weeding <span style={{ color: "#47B5FF" }}>Photography</span>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="d-flex nav-link">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/service">Service</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              {
                user ? <Link to="/login" onClick={handleSignOut} style={{textDecoration: 'none', color:"#FF5200"}}>SignOut</Link>
                :
                <CustomLink to="/login">Login</CustomLink>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
