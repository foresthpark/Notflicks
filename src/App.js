import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from "./components/NavBar"
// import MainCarousel222 from "./components/Landing/MainCarousel222"
import MovieDetail from './components/MovieDetail'

import { requestMovies } from './actions'

const mapStateToProps = (state) => {
  return {
    isPending: state.requestMovies.isPending,
    movies: state.requestMovies.movies,
    error: state.requestMovies.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestMovies: () => dispatch(requestMovies())
  }
}

class App extends Component {
  
  componentDidMount() {
    this.props.onRequestMovies()
  }

  render(){
    const { movies, isPending, error } = this.props
    console.log('aap', movies)
    return isPending ? 
    <h1>loading....</h1> :


  
    // const movieDetail = movies.map( movie => movie.results)
    // console.log(movieDetail[0])
    // for(let x in movies[0]){
    //   console.log(x)
    // }

    // setTimeout(() => {
    //   console.log(movies[0].results[0].title)
    // }, 3000)
    
  (
    <div className = "App">
      <NavBar />
      <MovieDetail movies = {movies} />
    </div>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 
