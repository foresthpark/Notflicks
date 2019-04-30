import React from "react"
import MovieCard from "./MovieCard";
import "./moviecard.css"

class TopRated extends React.Component {

  _renderMovies = () => {
    const movies = this.props.movies[0].results.map((movie, index) =>
      <MovieCard
        title={movie.original_title}
        poster={movie.poster_path}
        synopsis={movie.overview}
        release={movie.release_date}
        movieid={movie.id}
        rating={movie.vote_average}
        index={index}
        clicker={this.clickHandler}
      />
    );
    return movies
  }

  clickHandler = (event) => {
    this.setState({
      detailspage: true,
      selectedmovie: event.currentTarget.id
    }, () => console.log(this.state.selectedmovie))

  }

  render() {
    return (
      <div className="moviecard">
        {this.props.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default TopRated
