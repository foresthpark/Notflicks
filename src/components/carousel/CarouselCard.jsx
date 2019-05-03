import React from "react"
import MaterialUiCarousel from "../carousel/MaterialUiCarousel";
import "../css/carouselcard.css"
import {BrowserRouter as Router, Route, Switch, Link, withRouter, Redirect} from "react-router-dom";


class CarouselCard extends React.Component {
  render() {
    const {movies, head, getMovieDetail, renderPage, id} = this.props

    return (
      <div className="carouselcard">
        <MaterialUiCarousel movies={movies[0]} head={"Top Rated Movies"} getMovieDetail={getMovieDetail}
                            renderPage={renderPage} id={"toprated"}/>
        <MaterialUiCarousel movies={movies[1]} head={"Movies Now Playing"} getMovieDetail={getMovieDetail}
                            renderPage={renderPage} id={"nowplaying"}/>
        <MaterialUiCarousel movies={movies[2]} head={"Upcoming Movies"} getMovieDetail={getMovieDetail}
                            renderPage={renderPage} id={"upcoming"}/>
        <MaterialUiCarousel movies={movies[3]} head={"Popular Movies"} getMovieDetail={getMovieDetail}
                            renderPage={renderPage} id={"popular"}/>
      </div>
    );
  }
}

export default withRouter(CarouselCard)
