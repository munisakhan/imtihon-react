import React, { Component } from "react";
import Slider from "react-slick";

import './main.css'
import imgmain from "../../assets/main/imgmain.png"
import img2 from "../../assets/main/img2.gif"
import img3 from "../../assets/main/img3.webp"
import img1 from "../../assets/images/img1.png"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <main className="main">
        <div className="container">
          <div className="div">
        <Slider {...settings}>
          <div className="dives">
            <img src={imgmain} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </Slider>
        </div>
      </div>
    </main>
    );
  }
}