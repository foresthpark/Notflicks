import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from "../components/navigation/NavBar"
import MovieDetails from '../components/detailed/MovieDetails'
import {requestMovies, getMovieDetail, renderPage, searchInput, searchDetail} from './actions'
import NowPlaying from "../components/cards/NowPlaying";
import TopRated from "../components/cards/TopRated"
import Upcoming from "../components/cards/Upcoming"
import Popular from '../components/cards/Popular'
import SearchResults from '../components/cards/SearchResults'
import Loading from '../components/loading/Loading'
import Scroll from "../components/navigation/Scroll"
import "../components/css/moviecard.css"
import "./App.css"
import CarouselCard from "../components/cards/CarouselCard";
import About from "../components/navigation/About";
import SignIn from "../components/signin/signin"
import UserDetail from '../components/userdetail/UserDetail'


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
  constructor(){
    super()
    this.state = {
      user: {
        id: '',
        name: '',
        email: ''
      },
      loggedIn: false,
      userMovies: {
        id: '',
        movie_id: '',
        movies_detail: ''
      }
    }
  }

  onUserLogin = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email
      }
    })
    if (data) { this.setState({ loggedIn: true }) }
  }

  onUserLogout = (data) => {
    this.setState({
      user: {
        id: '',
        name: '',
        email: ''
      }
    })
    if (data) { this.setState({ loggedIn: false }) }
  }

  onUserSave = (data) => {
    console.log('yeet yeet', data)
    console.log('TITLE MOFO', data.title)
    console.log('user', this.state.user.id)
    fetch('http://localhost:3002/movies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id,
        movie_id: data.id,
        movies_data: data
      })
    })
    .then(res => console.log(res))

  }

  componentDidMount() {
    this.props.onRequestMovies()
  }


  render() {
    const {movies, isPending, onGetMovieDetail, renderDetail, movieId, onRenderPage, renderPage, movie2} = this.props

    return isPending ? <Loading/> :
      (
        <div className="App">
          <NavBar
            renderPage={onRenderPage}
            searchInput={this.props.onSearchInput}
            searchDetail={this.props.onSearchDetail}
            searchInputField={this.props.searchInputField}
            loggedIn={this.state.loggedIn}
            user={this.state.user}
            onUserLogout={this.onUserLogout}
          />
          {renderDetail === false &&
          <Scroll>
            {renderPage === 'notflicks' &&
            <div>
              <CarouselCard movies={movies} getMovieDetail={onGetMovieDetail} renderPage={onRenderPage}/>
            </div>
            }
            {renderPage === 'toprated' &&
            <TopRated 
              movies={movies[0]} 
              getMovieDetail={onGetMovieDetail} 
              head={"Top Rated"} 
              loggedIn={this.state.loggedIn} 
              onUserSave={this.onUserSave}
              />
            }
            {renderPage === 'upcoming' &&
            <Upcoming movies={movies[1]} getMovieDetail={onGetMovieDetail} head={"Upcoming"}/>
            }
            {renderPage === 'nowplaying' &&
            <NowPlaying movies={movies[2]} getMovieDetail={onGetMovieDetail} head={"Now Playing"}/>
            }
            {renderPage === 'popular' &&
            <Popular movies={movies[3]} getMovieDetail={onGetMovieDetail} head={"Popular"}/>
            }
            {renderPage === 'about' &&
            <About/>
            }
            {renderPage === 'search' &&
            <SearchResults movies={movie2[0]} getMovieDetail={onGetMovieDetail} head={'Search Results'}/>
            }
            {renderPage === 'signin' && this.state.loggedIn === false &&
            <SignIn onUserLogin={this.onUserLogin} head={'Sign In'} />
            }
            {this.state.loggedIn === true &&
            <UserDetail 
              userId={this.state.user.id} 
              getMovieDetail={onGetMovieDetail} 
              head={"Top Rated"} 
              loggedIn={this.state.loggedIn} 
              onUserSave={this.onUserSave}
              userName={this.state.user.name}
            />
            }
          </Scroll>
          }
          {renderDetail === true &&
          <Scroll>
            <MovieDetails
              movieId={movieId}
              getMovieDetail={onGetMovieDetail}
            />
          </Scroll>
          }
        </div>
      )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
