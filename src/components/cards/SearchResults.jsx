import React from "react"
import MovieCard from "./MovieCard";
import {withRouter} from 'react-router-dom'
import "../css/moviecard.css"

const SearchResults = ({match: {params: {results}}}, props) => {

  const {movies, getMovieDetail, head} = props
  console.log('WHERE ARE YOU', results)

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


export default withRouter(SearchResults)