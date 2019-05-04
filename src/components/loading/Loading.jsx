import React from "react"
import ActivityIndicator from 'react-activity-indicator'
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <div>
        <ActivityIndicator
          number={4}
          diameter={40}
          duration={100}
          activeColor="#02A7CE"
          borderColor="white"
          borderWidth={5}
          borderRadius="50%"
        />
      </div>
    </div>
  );
}


export default Loading