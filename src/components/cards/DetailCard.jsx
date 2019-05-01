import React from "react"
import DetailInfo from "./DetailInfo";
import "../css/detailcard.css"

class DetailCard extends React.Component {

  render() {
    const {movie} = this.props

    const detailCard = movie[1].results.slice(1, 6).map((movie, index) => {
      return (
        <DetailInfo
          key={movie.id}
          title={movie.original_title}
          poster={movie.poster_path}
          synopsis={movie.overview}
          release={movie.release_date}
          movieid={movie.id}
          rating={movie.vote_average}
          index={index}
          // MUST ADD CLICKER HERE
        />
      )
    });

    return (
      <div className="detailcardcontainer">
        <div className="relatedheader">
          <div>Related</div>
        </div>
        <div className="detailcard">
          {detailCard}
        </div>
      </div>
    );
  }
}

export default DetailCard
