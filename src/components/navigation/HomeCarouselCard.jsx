import React from "react"
import CarouselCard from "../../containers/Home";

class HomeCarouselCard extends React.Component {

  render() {
    const {movies, onGetMovieDetail} = this.props
    return (
      <div>
        <CarouselCard movies={movies} getMovieDetail={onGetMovieDetail}/>
      </div>
    );
  }
}

export default HomeCarouselCard
