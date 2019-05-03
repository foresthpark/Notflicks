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


const mapStateToProps = (state) => {
  return {
    isPending: state.requestMovies.isPending,
    movies: state.requestMovies.movies,
    error: state.requestMovies.error,
    movieId: state.getMovieDetail.movieId,
    renderDetail: state.getMovieDetail.renderDetail,
    renderPage: state.getMovieDetail.renderPage,
    searchInputField: state.getMovieDetail.searchInputField,
    isPending2: state.getMovieDetail.isPending2,
    movie2: state.getMovieDetail.movie2,
    error2: state.getMovieDetail.error2,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestMovies: () => dispatch(requestMovies()),
    onGetMovieDetail: (event) => dispatch(getMovieDetail(event.currentTarget.id)),
    onRenderPage: (event) => dispatch(renderPage(event.target.id)),
    onSearchInput: (event) => dispatch(searchInput(event.target.value)),
    onSearchDetail: (a) => dispatch(searchDetail(a))
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestMovies()
  }

  render() {
    console.log('app render', this.props.renderPage)
    const {movies, isPending, onGetMovieDetail, renderDetail, movieId, onRenderPage, renderPage, movie2} = this.props

    // return isPending ? <Loading/> :
    return (

      <div>
        <NavBar
          renderPage={onRenderPage}
          searchInput={this.props.onSearchInput}
          searchDetail={this.props.onSearchDetail}
          searchInputField={this.props.searchInputField}
        />
        <Router>
          <div>
            <Switch>
              <Route path='/' isAuthed={true}
                     component={() => isPending ? <Loading/> : <Home movies={movies}/>}/>
              <Route exact path='/toprated' isAuthed={true}
                     component={() => isPending ? <Loading/> : <TopRated movies={movies[0]} head={'My Ass'}/>}/>
              {/*<Route exact path={'/toprated'} component={() => isPending ? <Loading/> : <TopRated movies={movies}/>}/>*/}
            </Switch>
          </div>
        </Router>
      </div>

    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default connect(mapStateToProps, mapDispatchToProps)(App)
