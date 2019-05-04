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
import {BrowserRouter as Router, Route, Switch, withRouter, Link} from "react-router-dom";
import "../components/css/moviecard.css"
import "./App.css"
import CarouselCard from "../components/carousel/CarouselCard";
import TestRouter from "../components/test/TestRouter"
import App from '../containers/App'
import TestRouter2 from "../components/test/TestRouter2";
import HomeCarouselCard from "../components/navigation/HomeCarouselCard";

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

class Home extends React.Component {


  componentDidMount() {
    this.props.onRequestMovies()
  }

  render() {
    console.log('app render', this.props.movies)
    const {movies, isPending, onGetMovieDetail, renderDetail, movieId, onRenderPage, renderPage, movie2} = this.props

    return (

      <div className="App">
        <Router>

          <Route path={'/'} render={(props) =>
            <NavBar
              movies={movies}
              onGetMovieDetail={onGetMovieDetail}
              renderPage={onRenderPage}
              searchInput={this.props.onSearchInput}
              searchDetail={this.props.onSearchDetail}
              searchInputField={this.props.searchInputField}
            />}/>
          <Route path={'/'} component={TestRouter}/>

          <Route exact={true} path={'/'} component={() => <App movies={movies}
                                                               getMovieDetail={onGetMovieDetail}
                                                               nRenderPage={onRenderPage}/>}/>

          <Route exact={true} path={'/toprated'}
                 render={(props) => <TopRated {...props} movies={movies[0]} getMovieDetail={onGetMovieDetail}
                                              renderPage={onRenderPage}
                                              head={"Top Rated"} isAuthed={true}/>}/>

          <Route exact={true} path={'/nowplaying'}
                 render={(props) => <NowPlaying {...props} movies={movies[1]} getMovieDetail={onGetMovieDetail}
                                                renderPage={onRenderPage}
                                                head={"Now Playing"} isAuthed={true}/>}/>

          <Route exact={true} path={'/upcoming'}
                 render={(props) => <Upcoming {...props} movies={movies[2]} getMovieDetail={onGetMovieDetail}
                                              renderPage={onRenderPage}
                                              head={"Upcoming"} isAuthed={true}/>}/>
          <Route exact={true} path={'/popular'}
                 render={(props) => <Popular {...props} movies={movies[3]} getMovieDetail={onGetMovieDetail}
                                             head={"Popular"} isAuthed={true}/>}/>


          <Route exact={true} path={'/app'}
                 render={(props) => <App {...props} movies={movies} getMovieDetail={onGetMovieDetail}
                                         head={"Popular"} isAuthed={true}/>}/>

          <Route exact={true} path={'/test2'} component={TestRouter2}/>


          <Route exact={true} path={'/test'} component={TestRouter}/>


          {/*</Switch>*/}

        </Router>
      </div>

    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
