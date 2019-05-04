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

    // Related Movies
    const relatedArray = movie[1].results.slice(0, 5)
    let relatedMoviesCard;
    if (relatedArray.length > 0) {
      relatedMoviesCard = relatedArray.map((movie, index) => {
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
    } else {
      relatedMoviesCard = <div>There are no movies related to this movie</div>
    }

    // Related movie cast members
    const castArray = movie[2].cast.slice(0, 5) // Grab up to only 5 cast members
    let castCard;
    if (castArray.length > 0) { // Check if a trailer object exists
      castCard = castArray.map((movie, index) => {
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
    } else { // if now trailers exist:
      castCard = <div>Sorry, there is no cast info for this movie</div>
    }

    // Reviews for the movie
    const reviewsArray = movie[4].results.slice(0, 5) // Grab only 5 reviews
    let reviewsCard;
    if (reviewsArray.length > 0) { // Check if a review object exists
      reviewsCard = reviewsArray.map((review, index) => {
        return (
          <ReviewCard
            key={index}
            author={review.author}
            content={review.content}
          />
        )
      })
    } else { // if now reviews exist:
      reviewsCard = <div>There are no reviews for this movie</div>
    }

    // Movie Trailers - You only see one trailer
    const trailersArray = movie[3].results
    let movieTrailer;
    if (trailersArray.length > 0) { // Check if a trailer object exists
      movieTrailer = <MovieTrailer movie={movie}/>
    } else { // if now trailers exist:
      movieTrailer = <div>Sorry, there are no trailers for this movie</div>
    }

    return (
      <div className="detailcardcontainer">


        <div className="relatedheader">
          Synopsis
        </div>
        <div className="synopsis">
          {movie[0].overview}
        </div>

        {/*Trailers will display here*/}
        <div className="relatedheader">
          <div>Trailer</div>
        </div>
        <div className="detailcard">
          {movieTrailer}
        </div>

        {/*Related Movies display here*/}
        <div className="relatedheader">
          <div>Related</div>
        </div>
        <div className="detailcard">
          {relatedMoviesCard}
        </div>

        {/*Movie Cast display here*/}
        <div className="relatedheader">
          <div>Cast</div>
        </div>
        <div className="detailcard">
          {castCard}
        </div>

        {/*Movie Reviews display here*/}
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
