import React from "react"
import MovieCard from "../MovieCard";

const CastRelatedMovies = (props) => {
  return (
    <React.Fragment>
      {props.movies.map(movie => {
        return (
          <MovieCard
            movieid={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            release={movie.release_date}
            // synopsis={movie.overview} // Uncomment if you want to add Synopsis to Cast Related Movies Results
          />
        )
      })}
    </React.Fragment>
  );
}

export default CastRelatedMovies