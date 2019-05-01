import React from "react"
import ActivityIndicator from 'react-activity-indicator'
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <ActivityIndicator
        number={4}
        diameter={40}
        borderWidth={1}
        duration={100}
        activeColor="#02A7CE"
        borderColor="white"
        borderWidth={5}
        borderRadius="50%"
      />
      {/*<h1 className="roboheader">Loading</h1>*/}
    </div>
  );
}


export default Loading