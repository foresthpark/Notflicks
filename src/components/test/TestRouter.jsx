import React from "react"

class TestRouter extends React.Component {
  render() {
    console.log("HELLLLLLOOO", this.props.movies[0].results)
    return (
      <div>
        <h1>Hello!!!!!!!! WORLD!!!!!!!</h1>
      </div>
    );
  }
}

export default TestRouter
