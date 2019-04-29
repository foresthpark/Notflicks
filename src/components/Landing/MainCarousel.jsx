import React from "react"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

class MainCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://image.tmdb.org/t/p/w200/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg" alt="Legend 1"/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://image.tmdb.org/t/p/w200/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg" alt="Legend 2"/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9sl16pB3iy.jpg" alt="Legend 3"/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default MainCarousel
