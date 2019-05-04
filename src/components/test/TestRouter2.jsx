import React from "react"
import {Link} from "react-router-dom";

class TestRouter2 extends React.Component {
  render() {
    return (
      <div>
        <h1>TEST ROUTINGGGGGG</h1>
        <Link to={'/'}>
          Go to Test 1
        </Link>
      </div>
    );
  }
}

export default TestRouter2
