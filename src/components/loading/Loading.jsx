import React from "react"
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <div>
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}


export default Loading