import React, {Component} from "react";
import Slider from "react-slick";
import "./slider.css"
import "../../plugins/slick-carousel/slick/slick.css";
import "../../plugins/slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      speed: 500,
      arrow: true,
      centerPadding: 100,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="imageslide">
            <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" height="300"/>
          </div>
          <div className="imageslide">
            <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" height="300"/>
          </div>
          <div className="imageslide">
            <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" height="300"/>
          </div>
          <div className="imageslide">
            <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" height="300"/>
          </div>
          <div className="imageslide">
            <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" height="300"/>
          </div>
          <div className="imageslide">
            <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" height="300"/>
          </div>
        </Slider>
      </div>
    );
  }
}