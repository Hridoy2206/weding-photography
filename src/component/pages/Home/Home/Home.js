import React from "react";
import {
  Carousel,
} from "react-bootstrap";
import carousel_1 from "../../../../Image/carousel-1.png";
import carousel_2 from "../../../../Image/corousel-2.png";
// import carousel_3 from "../../../../Image/carousel-3.jpg";
import './Home.css'
import Services from "../../Services/Services/Services";
import PhotographyDetails from "../../PhotographyDetails/PhotographyDetails";

const Home = () => {
  return (
    <div className="mt-5">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel_1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <h1 style={{color:'#47B5FF', fontWeight:'700'}}>First slide label</h1>
            <p style={{fontWeight: 'bold', color:'#444'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel_2} alt="Second slide" />

          <Carousel.Caption className="carousel-caption">
            <h1 style={{color:'#47B5FF', fontWeight:'700'}}>Second slide label</h1>
            <p style={{fontWeight: 'bold', color:'#444'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            height={450}
            className="d-block w-100"
            src={carousel_3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      <Services></Services>
      <PhotographyDetails></PhotographyDetails>
    </div>
  );
};

export default Home;
