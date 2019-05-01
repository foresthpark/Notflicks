import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from "./components/navigation/NavBar"
import MovieDetails from './components/detailed/MovieDetails'
import {requestMovies, getMovieDetail, renderPage } from './actions'
import MaterialUiCarousel from "./components/carousel/MaterialUiCarousel"
import NowPlaying from "./components/cards/NowPlaying";
import TopRated from "./components/cards/TopRated"
import Upcoming from "./components/cards/Upcoming"
import Loading from './components/loading/Loading'
import Scroll from "./components/navigation/Scroll"
import "./components/css/moviecard.css"
import "./App.css"

const mapStateToProps = (state) => {
  return {
    isPending: state.requestMovies.isPending,
    movies: state.requestMovies.movies,
    error: state.requestMovies.error,
    movieId: state.getMovieDetail.movieId,
    renderDetail: state.getMovieDetail.renderDetail,
    renderPage: state.getMovieDetail.renderPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestMovies: () => dispatch(requestMovies()),
    onGetMovieDetail: (event) => dispatch(getMovieDetail(event.currentTarget.id)),
    onRenderPage: (event) => dispatch(renderPage(event.target.id)),
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestMovies()
  }


  render() {
    console.log('app render', this.props.renderPage)
    const {movies, isPending, onGetMovieDetail, renderDetail, movieId, onRenderPage, renderPage} = this.props

    return isPending ? <Loading/> :
      (
        <div className="App">
          <NavBar renderPage = {onRenderPage} />
          {renderDetail === false &&
          <Scroll>
            {renderPage === 'notflicks' &&
              <div className="mainpagecarousel">
                <MaterialUiCarousel movies={movies[0]} head={"Hello?"} getMovieDetail={onGetMovieDetail}/>
                <MaterialUiCarousel movies={movies[1]} head={"Is it me..."} getMovieDetail={onGetMovieDetail}/>
                <MaterialUiCarousel movies={movies[2]} head={"You're looking for??"} getMovieDetail={onGetMovieDetail}/>
              </div>
            }
            {renderPage === 'toprated' &&
              <TopRated movies={movies[0]} getMovieDetail={onGetMovieDetail} head={"Top Rated"} />
            }
            {renderPage === 'upcoming' &&
              <Upcoming movies={movies[1]} getMovieDetail={onGetMovieDetail} head={"Upcoming"}/>
            }
            {renderPage === 'nowplaying' &&
              <NowPlaying movies={movies[2]} getMovieDetail={onGetMovieDetail} head={"Now Playing"}/>
            }
          </Scroll>
          }
          {renderDetail === true &&
            <MovieDetails
              movieId = {movieId}
            />
          }
        </div>
      )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
