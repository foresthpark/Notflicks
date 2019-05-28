import React from "react"
import MovieCard from "./MovieCard";
import "../css/moviecard.css"

class UserMovies extends React.Component {

render(){
  const {userMovies, clicker, loggedIn, onUserSave, renderPage, dbUserRemove, userName} = this.props
  const movieArray = []

  let user 
    if (userName[userName.length - 1] === 's'){
     user = `${userName}' Movies`
    }else{
    user = `${userName}'s Movies`}
  
  if (userMovies[0].length === 0) {
    return (
      <div className="cardcontainer">
        <div className="cardhead">
          {user}
        </div>
        <div className='nosavedmovies'>
          You have no saved movies
        </div>
      )
    } else {
      userMovies[0].map((movie) => {
        return (
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
            clicker={clicker}
            loggedIn={loggedIn}
            onUserSave={onUserSave}
            movie={movie}
            renderPage={renderPage}
            dbUserRemove={dbUserRemove}
          />
        )
      })
      return (
        <div className="cardcontainer">
          <div className="cardhead">
            {user}
          </div>
          <div className="moviecard">
            {moviesCard}
          </div>
        </div>
      )
    }
  }
}

export default UserMovies