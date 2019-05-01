import React from "react"
import "../css/synopsis.css"

class Synopsis extends React.Component {

  render() {
    const {movie} = this.props
    return (
      <div>
        <div className="header">
          Synopsis
        </div>
        <div className="synopsis">
          {movie[0].overview}
        </div>
      </div>
    );
  }
}

export default Synopsis
