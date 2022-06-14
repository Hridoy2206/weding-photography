import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
    const { name, price, image, description } = service;
    const navigate = useNavigate();

    const navigateCheckoutPage = () =>{
        navigate('/service')
    }
  return (
    <div className="cart-details">
      <div>
        <div className="cart-image">
          <img src={image} alt="" />
        </div>
        <h3 className="text-center">{name}</h3>
        <h4>Cost: <small className="price">${price}</small></h4>
        <p>{description}</p>
        <button onClick={navigateCheckoutPage} className="cart-btn">Check Out</button>
      </div>
    </div>
  );
};

export default Service;
