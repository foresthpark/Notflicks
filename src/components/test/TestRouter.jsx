import React from "react"
import {BrowserRouter as Router, Route, Switch, withRouter, Link} from "react-router-dom";


class TestRouter extends React.Component {
  render() {
    // console.log("HELLLLLLOOO", this.props.movies[0].results)
    return (
      <div>
        <h1>Hello!!!!!!!! WORLD!!!!!!!</h1>
        <Link to={'/test2'}>
          Go to Test 2
        </Link>
        <br/>
        <Link to={'/toprated'}>
          Go to TOPRATED
        </Link>
        <br/>
        <Link to={'/nowplaying'}>
          Go to NOWPLAYING
        </Link>
        <br/>
        <Link to={'/upcoming'}>
          Go to Upcoming
        </Link>
        <br/>
        <Link to={'/popular'}>
          Go to POPULAR
        </Link>
        <br/>
        <Link to={'/carousel'}>
          Go to CAROUSEL
        </Link>
        <br/>
        <Link to={'/app'}>
          Go to APP
        </Link>


      </div>
    );
  }
}

export default TestRouter