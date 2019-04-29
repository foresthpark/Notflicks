import React from "react"
// https://www.npmjs.com/package/react-slick
import Slider from "react-slick";
import "../../plugins/slick-carousel/slick/slick.css";
import "../../plugins/slick-carousel/slick/slick-theme.css";

class MainCarousel222 extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" width="300"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" width="300"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" width="300"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" width="300"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" width="300"/>
          </div>
          <div>
            <img src="https://image.tmdb.org/t/p/w300/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" width="300"/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MainCarousel222
