import React from "react"
// https://reactjsexample.com/a-pure-reactjs-carousel-component/
import Carousel from 'nuka-carousel';

class NukaCarousel extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <img src="http://placehold.it/1000x100/ffffff/c0392b/&text=Whattt"/>
          <img src="http://placehold.it/1000x100/ffffff/c0392b/&text=slide2"/>
          <img src="http://placehold.it/1000x100/ffffff/c0392b/&text=slide3"/>
          <img src="http://placehold.it/1000x100/ffffff/c0392b/&text=slide4"/>
          <img src="http://placehold.it/1000x100/ffffff/c0392b/&text=slide5"/>
          <img src="http://placehold.it/1000x100/ffffff/c0392b/&text=slide6"/>
        </Carousel>
      </div>
    );
  }
}

export default NukaCarousel
