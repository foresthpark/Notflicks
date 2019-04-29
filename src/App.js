import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from "./components/NavBar"
import MainCarousel222 from "./components/Landing/MainCarousel222"

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
  return (
    <div className = "App">
      <NavBar/>
      <MainCarousel222/>
    </div>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 
