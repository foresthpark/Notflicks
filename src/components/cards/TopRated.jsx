import React from "react"
import MovieCard from "./MovieCard";
import Loading from "../loading/Loading"
import "../css/moviecard.css"

class TopRated extends React.Component {
  _renderMovies = () => {
    const {movies} = this.props
    const moviesArray = movies.results.map((movie, index) =>
      <MovieCard
        title={movie.original_title}
        poster={movie.poster_path}
        synopsis={movie.overview}
        release={movie.release_date}
        movieid={movie.id}
        rating={movie.vote_average}
        index={index}
        key={index}
        clicker={this.clickHandler}
      />
    );
    return moviesArray
  }

  clickHandler = (event) => {
    this.setState({
      detailspage: true,
      selectedmovie: event.currentTarget.id
    }, () => console.log(this.state.selectedmovie))
  }

  render() {
    const {head, movies} = this.props
    return (
      <div classname="cardcontainer">
        <div className="cardhead">
          {head}
        </div>
        <div className="moviecard">
          {movies ? this._renderMovies() : <Loading/>}
        </div>
      </div>
    );
  }
}

export default TopRated
