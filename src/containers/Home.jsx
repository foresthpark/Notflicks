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

class Home extends React.Component {

  render() {
    console.log('app render', this.props.renderPage)
    const {movies, isPending, onGetMovieDetail, renderDetail, movieId, onRenderPage, renderPage, movie2} = this.props

    return (

      <div className="App">
        <Switch>
          <Route exact={true} path={'/'}
                 render={(props) => <CarouselCard {...props} movies={movies} getMovieDetail={onGetMovieDetail}
                                                  renderPage={onRenderPage} isAuthed={true} head={"Top Rated"}/>}/>

          <Route exact={true} path={'/toprated'}
                 render={(props) => <TopRated {...props} movies={movies[0]} getMovieDetail={onGetMovieDetail}
                                              head={"Top Rated"} isAuthed={true}/>}/>

          {/*<Route exact={true} path={'/test'} component={TestRouter}/>*/}


        </Switch>

        {/*{renderDetail === false &&*/}
        {/*<Scroll>*/}
        {/*{renderPage === 'notflicks' &&*/}
        {/*<CarouselCard movies={movies} getMovieDetail={onGetMovieDetail}*/}
        {/*renderPage={onRenderPage} id={"toprated"}/>*/}
        {/*}*/}

        {/*{renderPage === 'toprated' &&*/}
        {/*<TopRated movies={movies[0]} getMovieDetail={onGetMovieDetail} head={"Top Rated"}/>*/}
        {/*}*/}

        {/*{renderPage === 'upcoming' &&*/}
        {/*<Upcoming movies={movies[1]} getMovieDetail={onGetMovieDetail} head={"Upcoming"}/>*/}
        {/*}*/}

        {/*{renderPage === 'nowplaying' &&*/}
        {/*<NowPlaying movies={movies[2]} getMovieDetail={onGetMovieDetail} head={"Now Playing"}/>*/}
        {/*}*/}

        {/*{renderPage === 'popular' &&*/}
        {/*<Popular movies={movies[3]} getMovieDetail={onGetMovieDetail} head={"Popular"}/>*/}
        {/*}*/}

        {/*{renderPage === 'search' &&*/}
        {/*<SearchResults movies={movie2[0]} getMovieDetail={onGetMovieDetail} head={'Search Results'}/>*/}
        {/*}*/}

        {/*</Scroll>*/}
        {/*}*/}

        {/*{renderDetail === true &&*/}
        {/*<Scroll>*/}
        {/*<MovieDetails*/}
        {/*movieId={movieId}*/}
        {/*getMovieDetail={onGetMovieDetail}*/}
        {/*/>*/}
        {/*</Scroll>*/}
        {/*}*/}


      </div>

    )
  }
}

export default withRouter(Home)
