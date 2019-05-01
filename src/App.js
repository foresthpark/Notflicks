import React, {Component} from 'react'
import { connect } from 'react-redux'
import NavBar from "./components/NavBar"
import MovieDetail from './components/MovieDetail'
import MainCarousel222 from "./components/Landing/MainCarousel222"
import CarouselPage from "./components/Landing/CarouselPage"
import {requestMovies, getMovieDetail} from './actions'
import PureReactCarousel from "./components/Landing/PureReactCarousel";
import NukaCarousel from "./components/Landing/NukaCarousel";
import SimpleSlider from "./components/Landing/SimpleSlider";
import "./components/cards/moviecard.css"
import "./App.css"
import MovieCard from "./components/cards/MovieCard";
import TopRated from "./components/cards/TopRated";
import MaterialUiCarousel from "./components/Landing/MaterialUiCarousel"

const mapStateToProps = (state) => {
  return {
    isPending: state.requestMovies.isPending,
    movies: state.requestMovies.movies,
    error: state.requestMovies.error,
    MovieDetail: state.getMovieDetail.MovieDetail,
    renderDetail: state.getMovieDetail.renderDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestMovies: () => dispatch(requestMovies()),
    onGetMovieDetail: (event) => dispatch(getMovieDetail(event.currentTarget.id)),
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestMovies()
  }

  render() {
    console.log('render', this.props.renderDetail)
    const { movies, isPending, onGetMovieDetail, renderDetail } = this.props
    return isPending ?
    <h1>loading....</h1> :
    (
      <div className = "App">
        <NavBar />
        {renderDetail === false &&
        <TopRated 
          movies = { movies[0] }
          isPending = {isPending}
          getMovieDetail = {onGetMovieDetail}
        />
        }
        {renderDetail === true && 
        <MovieDetail />     
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
