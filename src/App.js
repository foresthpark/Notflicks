import React, {Component} from 'react'
import { connect } from 'react-redux'
import NavBar from "./components/NavBar"
import MovieDetail from './components/MovieDetail'
import MainCarousel222 from "./components/Landing/MainCarousel222"
import CarouselPage from "./components/Landing/CarouselPage"
import {requestMovies} from './actions'
import PureReactCarousel from "./components/Landing/PureReactCarousel";
import NukaCarousel from "./components/Landing/NukaCarousel";
import SimpleSlider from "./components/Landing/SimpleSlider";
import "./components/cards/moviecard.css"
import "./App.css"
import MovieCard from "./components/cards/MovieCard";
import TopRated from "./components/cards/TopRated";
import MaterialUiCarousel from "./components/Landing/MaterialUiCarousel"

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
    const { movies, isPending } = this.props
    return isPending ?
    <h1>loading....</h1> :
    (
      <div className = "App">
        <NavBar />
        <TopRated movies = { movies }/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
