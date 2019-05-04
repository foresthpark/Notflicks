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
    console.log('app render', this.props.renderPage)
    const {movies, isPending, onGetMovieDetail, renderDetail, movieId, onRenderPage, renderPage, movie2} = this.props

    return (

      <div className="App">
        <NavBar
          renderPage={onRenderPage}
          searchInput={this.props.onSearchInput}
          searchDetail={this.props.onSearchDetail}
          searchInputField={this.props.searchInputField}
        />
        <Switch>
          {/*<Route exact={true} path={'/'}*/}
          {/*render={() => <App movies={movies} renderDetail={renderDetail} movieId={movieId} isPending={isPending}*/}
          {/*renderPage={renderPage}*/}
          {/*getMovieDetail={onGetMovieDetail}*/}
          {/*renderPage={onRenderPage} isAuthed={true} head={"Top Rated"} children={true}/>}/>*/}

          <Route exact={true} path={'/toprated'}
                 render={(props) => <TopRated {...props} movies={movies[0]} getMovieDetail={onGetMovieDetail}
                                              head={"Top Rated"} isAuthed={true}/>}/>

          <Route exact={true} path={'/nowplaying'}
                 render={(props) => <NowPlaying {...props} movies={movies[1]} getMovieDetail={onGetMovieDetail}
                                                head={"Now Playing"} isAuthed={true}/>}/>

          <Route exact={true} path={'/'} component={TestRouter}/>
          <Route exact={true} path={'/test2'} component={TestRouter2}/>


          {/*<Route exact={true} path={'/test'} component={TestRouter}/>*/}


        </Switch>


      </div>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
