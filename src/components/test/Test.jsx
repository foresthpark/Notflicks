import React from "react"

const Test = (props) => {
  console.log(props)
  return (
    <div>
      helllo
      {props.match.params.results}
    </div>
  );
}

export default Test