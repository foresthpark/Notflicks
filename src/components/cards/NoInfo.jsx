import React from "react"
import "../css/noinfo.css"

class NoInfo extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="noinfo">
          Sorry, there is no trailer for this movie
        </div>
      </div>
    );
  }
}

export default NoInfo
