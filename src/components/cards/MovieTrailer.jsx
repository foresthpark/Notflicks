import React from "react"
import ReactPlayer from "react-player";

class MovieTrailer extends React.Component {
  render() {
    const {movie} = this.props
    const videoURL = "https://www.youtube.com/watch?v="

    let videoKey;
    if (movie[3].results.length > 0) {
      let videoKey = movie[3].results[0].key
    } else {
      let videoKey = null
    }

    const videoSuffix = "?controls=0"
    const fullURL = `${videoURL}${videoKey}${videoSuffix}`

    return (
      <div>
        {movie[3].results.length > 0 &&
        <ReactPlayer url={fullURL}/>
        }
      </div>
    );
  }
}

export default MovieTrailer
