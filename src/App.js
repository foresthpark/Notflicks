import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from "./components/NavBar"
import LeftMenu from "./components/LeftMenu"

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
      <LeftMenu/>
    </div>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 
