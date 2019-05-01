import React from "react"
import MovieCard from "./MovieCard";
import "./moviecard.css"

class TopRated extends React.Component {
  render() {
    const movies = this.props.movies.results.map((movie, index) => {
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
          clicker={this.props.getMovieDetail}
        />
      )
    })
    return (
      <div className="moviecard">
        {movies}
      </div>
    );
  }
}

export default TopRated
