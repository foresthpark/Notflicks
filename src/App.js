import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from "./components/NavBar"
import {requestMovies} from './actions'
import "./components/css/moviecard.css"
import "./App.css"
import TopRated from "./components/cards/TopRated";
import MaterialUiCarousel from "./components/carousel/MaterialUiCarousel"
import Loading from "./components/loading/Loading"
import Upcoming from "./components/cards/Upcoming";
import NowPlaying from "./components/cards/NowPlaying";

const mapStateToProps = (state) => {
  console.log(state)
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

  render() {
    const {movies, isPending} = this.props
    return isPending ?
      <Loading/> :
      (
        <div className="App">
          <NavBar/>
          <div className="mainpagecarousel">
            <MaterialUiCarousel movies={movies[0]} head={"Hello?"}/>
            <MaterialUiCarousel movies={movies[1]} head={"Is it me..."}/>
            <MaterialUiCarousel movies={movies[2]} head={"You're looking for??"}/>
          </div>
          <TopRated movies={movies[0]} head={"Top Rated"}/>
          <Upcoming movies={movies[1]} head={"Upcoming"}/>
          <NowPlaying movies={movies[1]} head={"Now Playing"}/>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
