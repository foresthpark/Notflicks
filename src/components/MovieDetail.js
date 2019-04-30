import React, { Component } from 'react'

class MovieDetail extends Component{
  render(){
    const { movies } = this.props
    console.log('comp', movies[0])
    // const detailComponent = movies.map(movie =>{

    // })

    return(
      <div> 
      {movies[0].results[0].title}
      </div>
    )
  }
}

export default MovieDetail