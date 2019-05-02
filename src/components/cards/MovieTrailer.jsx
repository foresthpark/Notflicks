import React from "react"
import ReactPlayer from "react-player";
import NoInfo from "./NoInfo";
import "../css/videoplayer.css"

class MovieTrailer extends React.Component {
  render() {
    const {movie} = this.props
    const videoURL = "https://www.youtube.com/watch?v="
    let videoKey = movie[3].results[0] ? movie[3].results[0].key : null
    const videoSuffix = "?controls=0"
    const fullURL = `${videoURL}${videoKey}${videoSuffix}`

    return (
      <div className="videoplayer">
        {videoKey ? <ReactPlayer url={fullURL}/> : <NoInfo/>}
      </div>
    );
  }
}

export default MovieTrailer
