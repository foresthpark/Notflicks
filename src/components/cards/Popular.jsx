import React from "react"
import MovieCard from "./MovieCard";
import "../css/moviecard.css"

class Popular extends React.Component {
  render() {
    const {movies, getMovieDetail, head} = this.props
    const moviesArray = movies.results
    const moviesCard = moviesArray.map((movie, index) => {
      return (
        <MovieCard
          key={movie.id}
          title={movie.original_title}
          poster={movie.poster_path}
          synopsis={movie.overview}
          release={movie.release_date}
          movieid={movie.id}
          rating={movie.vote_average}
          index={index}
          clicker={getMovieDetail}
          loggedIn={this.props.loggedIn}
          onUserSave={this.props.onUserSave}
          movie={movie}
        />
      )
    })
    return (
      <div className="cardcontainer">
        <div className="cardhead">
          {head}
        </div>
        <div className="moviecard">
          {moviesCard}
        </div>
      </div>
    );
  }
}

export default Popular
