import React from "react"
import MovieCard from "./MovieCard";
import "./moviecard.css"

class TopRated extends React.Component {
  render() {
    const { movies, getMovieDetail} = this.props
    const moviesCard = movies.results.map((movie, index) => {
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
        />
      )
    })
    return (
      <div className="moviecard">
        {moviesCard}
      </div>
    );
  }
}

export default TopRated
