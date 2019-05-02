import React from "react"
import RelatedMovies from "./RelatedMovies";
import RelatedCast from "../cards/RelatedCast"
import "../css/detailcard.css"
import MovieTrailer from "./MovieTrailer";

class RelatedCard extends React.Component {

  render() {
    const {movie, clicker} = this.props

    const detailCard = movie[1].results.slice(1, 8).map((movie, index) => {
      return (
        <RelatedMovies
          key={movie.id}
          title={movie.original_title}
          poster={movie.poster_path}
          synopsis={movie.overview}
          release={movie.release_date}
          movieid={movie.id}
          rating={movie.vote_average}
          index={index}
          clicker={clicker}
        />
      )
    });

    const castCard = movie[2].cast.slice(1, 6).map((movie, index) => {
      return (
        <RelatedCast
          key={index}
          index={movie.id}
          poster={movie.profile_path}
          character={movie.character}
          name={movie.name}
        />
      )
    });

    const trailerCard = movie[3].results.map((movie, index) => {
      return (
        <div>
          {movie.key}
        </div>
      )
    });

    return (
      <div className="detailcardcontainer">

        {/*Trailers will show here*/}
        <div className="relatedheader">
          <div>Trailer</div>
        </div>
        <div className="detailcard">
          <MovieTrailer movie={movie}/>
        </div>

        {/*Related Movies show here*/}
        <div className="relatedheader">
          <div>Related</div>
        </div>
        <div className="detailcard">
          {detailCard}
        </div>

        {/*Movie Cast shows here*/}
        <div className="relatedheader">
          <div>Cast</div>
        </div>
        <div className="detailcard">
          {castCard}
        </div>

      </div>
    );
  }
}

export default RelatedCard
