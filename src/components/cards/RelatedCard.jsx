import React from "react"
import RelatedMovies from "./RelatedMovies";
import RelatedCast from "../cards/RelatedCast"
import ProfileImage from "../images/profile.png"
import MovieTrailer from "./MovieTrailer";
import "../css/detailcard.css"
import NoInfo from "./NoInfo";
import ReviewCard from "./ReviewCard";

class RelatedCard extends React.Component {

  render() {
    const {movie, clicker} = this.props

    let relatedMoviesCard;
    if (movie[1].results.length > 0) {
      relatedMoviesCard = movie[1].results.slice(0, 5).map((movie, index) => {
        return (
          <div><RelatedMovies
            key={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            synopsis={movie.overview}
            release={movie.release_date}
            movieid={movie.id}
            rating={movie.vote_average}
            index={index}
            clicker={clicker}
          /></div>
        )
      });
    } else {
      relatedMoviesCard = <div>There are no movies related to this movie</div>
    }

    const castCard = movie[2].cast.slice(0, 5).map((movie, index) => {
      return (
        <RelatedCast
          key={index}
          index={movie.id}
          poster={movie.profile_path ? movie.profile_path : null}
          character={movie.character}
          name={movie.name}
        />
      )
    });

    const reviewsArray = movie[4].results
    let reviewsCard;
    if (reviewsArray.length > 0) {
      reviewsCard = movie[4].results.slice(0.5).map((review, index) => {
        return (
          <ReviewCard
            key={index}
            author={review.author}
            content={review.content}
          />
        )
      })
    } else {
      reviewsCard = <div>There are no reviews for this movie</div>
    }

    let movieTrailer;
    if (movie[3].results.length > 0) {
      movieTrailer = <MovieTrailer movie={movie}/>
    } else {
      movieTrailer = <div>Sorry, there are no trailers for this movie</div>
    }

    return (
      <div className="detailcardcontainer">

        {/*Trailers will show here*/}
        <div className="relatedheader">
          <div>Trailer</div>
        </div>
        <div className="detailcard">
          {movieTrailer}
        </div>

        {/*Related Movies show here*/}
        <div className="relatedheader">
          <div>Related</div>
        </div>
        <div className="detailcard">
          {relatedMoviesCard}
        </div>

        {/*Movie Cast shows here*/}
        <div className="relatedheader">
          <div>Cast</div>
        </div>
        <div className="detailcard">
          {castCard}
        </div>

        {/*Movie Reviews shows here*/}
        <div className="relatedheader">
          <div>Reviews</div>
        </div>
        <div className="detailcard">
          {reviewsCard}
        </div>

      </div>
    );
  }
}

export default RelatedCard
