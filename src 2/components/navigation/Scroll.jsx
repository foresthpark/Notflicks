import React from "react"
import "../css/scroll.css"

const Scroll = (props) => {
  return (
    <div className="scrolling">
      {props.children}
    </div>
  )
};


export default Scroll