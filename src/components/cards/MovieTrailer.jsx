import React from "react"
import ReactPlayer from "react-player";
import "../css/videoplayer.css"

class MovieTrailer extends React.Component {
  render() {
    const {movie} = this.props
    const moviesArray = movie[3].results

    return (
      <div className="videoplayer">
        {moviesArray.slice(0, 3).map((trailer, index) => {

          const videoURL = "https://www.youtube.com/watch?v="
          let videoKey = trailer ? trailer.key : null
          const videoSuffix = "?controls=0"
          const fullURL = `${videoURL}${videoKey}${videoSuffix}`

          return (
            <div className='trailer' id={index}>
              <ReactPlayer url={fullURL} width={348} height={196}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default MovieTrailer

