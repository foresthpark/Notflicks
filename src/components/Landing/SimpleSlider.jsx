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
      arrow: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}