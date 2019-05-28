import React from "react"
import MovieCard from "./MovieCard";
import {withRouter} from 'react-router-dom'
import "../css/moviecard.css"
import Loading from "../loading/Loading";


class SearchResults extends React.Component {

  render() {
    const {movies, getMovieDetail, head, isPending2, match, loggedIn, onUserSave} = this.props
    const moviesArray = movies[0].results

    let moviesCard;
    if (moviesArray.length > 0) {
      moviesCard = moviesArray.map((movie, index) => {
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
            loggedIn={loggedIn}
            clicker={getMovieDetail}
            onUserSave={onUserSave}
            movie={movie}
          />
        )
      })
    } else {
      moviesCard =
        <div className='searchquery'>
          {`There are no movies that match '${match.params.results}'`}
        </div>
    }

    return isPending2 ? <Loading/> :
      (
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


export default withRouter(SearchResults)
