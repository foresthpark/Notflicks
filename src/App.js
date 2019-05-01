import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from "./components/navigation/NavBar"
import MovieDetails from './components/detailed/MovieDetails'
import {requestMovies, getMovieDetail} from './actions'
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
    const {movies, isPending, onGetMovieDetail, renderDetail, movieId} = this.props

    return isPending ? <Loading/> :
      (
        <div className="App">
          <NavBar/>

          <Scroll>
            {renderDetail === false &&
            <div className="mainpagecarousel">
              <MaterialUiCarousel movies={movies[0]} head={"Hello?"}/>
              <MaterialUiCarousel movies={movies[1]} head={"Is it me..."}/>
              <MaterialUiCarousel movies={movies[2]} head={"You're looking for??"}/>

              <TopRated movies={movies[0]} getMovieDetail={onGetMovieDetail} head={"Top Rated"}/>
              <Upcoming movies={movies[1]} getMovieDetail={onGetMovieDetail} head={"Upcoming"}/>
              <NowPlaying movies={movies[2]} getMovieDetail={onGetMovieDetail} head={"Now Playing"}/>
            </div>
            }
          </Scroll>

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
