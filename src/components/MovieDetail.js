import React, { Component } from 'react'

class MovieDetail extends Component{
  render(){
    console.log('movieDetail', this.props.movie)
    return(
      <div> 
      <h1>Hello World</h1>
      </div>
    )
  }
}

export default MovieDetail