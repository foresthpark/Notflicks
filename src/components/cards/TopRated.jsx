import React from "react"
import MovieCard from "./MovieCard";
import "../css/moviecard.css"

class TopRated extends React.Component {
  render() {
    const {movies, getMovieDetail, head, userId} = this.props
    const moviesArray = movies.results
    const moviesCard = moviesArray.map((movie, index) => {
      return (
        <MovieCard
          userId={userId}
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
    )
  }
}

export default TopRated
