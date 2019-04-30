import React from "react"
// https://reactjsexample.com/a-pure-reactjs-carousel-component/
import Carousel from 'nuka-carousel';

class NukaCarousel extends React.Component {
  render() {
    return (
      <div>
        <Carousel slidesToShow={3} cellAlign="left" cellSpacing={20} slideWidth={0.6}>
          <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
          <img src="https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg"/>
        </Carousel>
      </div>
    );
  }
}

export default NukaCarousel
