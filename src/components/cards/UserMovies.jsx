import React from "react"
import MovieCard from "./MovieCard";
import "../css/moviecard.css"

class UserMovies extends React.Component {

render(){
  console.log('userMoves', this.props.userMovies)
  const movieArray = []
  this.props.userMovies[0].map((movie) => {
    return( 
      movieArray.push(JSON.parse(movie.movies_data))
    )
  })
  const moviesCard = movieArray.map((movie, index) => {
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
            clicker={this.props.clicker}
            loggedIn={this.props.loggedIn}
            onUserSave={this.props.onUserSave}
            movie={movie}
          />
        )
      })
      return (
        <div className="cardcontainer">
          <div className="cardhead">
            {`${this.props.userName}'s Movies`}
          </div>
          <div className="moviecard">
            {moviesCard}
          </div>
        </div>
      )
    }
}

export default UserMovies