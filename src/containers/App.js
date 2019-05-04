import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from "../components/navigation/NavBar"
import MovieDetails from '../components/detailed/MovieDetails'
import {requestMovies, getMovieDetail, renderPage, searchInput, searchDetail} from './actions'
import MaterialUiCarousel from "../components/carousel/MaterialUiCarousel"
import NowPlaying from "../components/cards/NowPlaying";
import TopRated from "../components/cards/TopRated"
import Upcoming from "../components/cards/Upcoming"
import Popular from '../components/cards/Popular'
import SearchResults from '../components/cards/SearchResults'
import Loading from '../components/loading/Loading'
import Scroll from "../components/navigation/Scroll"
import {BrowserRouter as Router, Route, Switch, Link, withRouter, Redirect} from "react-router-dom";
import "../components/css/moviecard.css"
import "./App.css"
import CarouselCard from "../components/carousel/CarouselCard";
import Home from "./Home";
import TestRouter from "../components/test/TestRouter";
import TestRouter2 from "../components/test/TestRouter2";

// import { searchDetail } from './reducers';

class App extends Component {


  render() {
    console.log('app render', this.props.renderPage)
    const {movies, isPending, onGetMovieDetail, renderDetail, movieId, onRenderPage, renderPage, movie2} = this.props

    // return isPending ? <Loading/> :
    return (

      <div className="App">
        <Scroll>

          <CarouselCard movies={movies} getMovieDetail={onGetMovieDetail}
                        renderPage={onRenderPage}/>
        </Scroll>

      </div>

    )
  }
}


export default App
// export default connect(mapStateToProps, mapDispatchToProps)(App)
