import React from "react";
import "./style.css";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carrousel";

const Home = () => {
  return (
    <div className="home_container">
      <Carousel />
      <div className="Services">
        <div className="vertical_line">
          <i className="uil uil-truck"></i>
          <h4>Smooth Delivery</h4>
        </div>
        <div className="vertical_line">
          <i className="uil uil-headphones-alt"></i>
          <h4>24/7 Support</h4>
        </div>
        <div className="vertical_line">
          <i className="uil uil-clock"></i>
          <h4>Return Policy</h4>
        </div>
        <div>
          <i className="uil uil-shield-check"></i>
          <h4>Secure Payment</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
