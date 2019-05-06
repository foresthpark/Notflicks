import React from "react"
import MovieCard from "./MovieCard";
import "../css/moviecard.css"

class TopRated extends React.Component {
  render() {
    const {movies, getMovieDetail, head} = this.props
    const moviesArray = movies.results.slice(1, 11)
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
    )
  }
}

export default TopRated
