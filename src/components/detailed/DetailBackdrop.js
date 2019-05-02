import React from "react"
import "../css/moviedetail.css"

class DetailBackdrop extends React.Component {

  render() {
    const {movie} = this.props
    // Base URL for all images in API
    const imgURL = "https://image.tmdb.org/t/p/original"

    const styles = {
      backdrop: {
        backgroundImage: `url(${imgURL}${movie[0].backdrop_path})`,
        backgroundSize: "100%",
        width: "100%",
        height: "100vh",
        opacity: "0.4",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    };

    return (
      <div className="container">
        <div style={styles.backdrop}></div>
        <div className="stickydiv">
          <div className="movieheader">
            {movie[0].title}
          </div>
          <div className="tagline">
            {movie[0].tagline}
          </div>
          <div className="rating">
            <span>&#11088;</span> {movie[0].vote_average}
          </div>
        </div>
      </div>
    );
  }
}

export default DetailBackdrop
