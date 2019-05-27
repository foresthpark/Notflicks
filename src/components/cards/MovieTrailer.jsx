import React from "react"
import ReactPlayer from "react-player";
import "../css/videoplayer.css"

class MovieTrailer extends React.Component {
  render() {
    const {movie} = this.props
    const moviesArray = movie[3].results[0]
    const videoURL = "https://www.youtube.com/watch?v="
    let videoKey = moviesArray ? moviesArray.key : null
    const videoSuffix = "?controls=0"
    const fullURL = `${videoURL}${videoKey}${videoSuffix}`

    return (
      <div className="videoplayer">
        <ReactPlayer url={fullURL} width={348} height={196}/>
      </div>
    );
  }
}

export default MovieTrailer
