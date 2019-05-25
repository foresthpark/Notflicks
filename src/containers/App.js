import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from "../components/navigation/NavBar"
import MovieDetails from '../components/detailed/MovieDetails'
import {requestMovies, getMovieDetail, renderPage, searchInput, searchDetail, userLogin, userLogout } from './actions'
import {requestUser, userSave, userRemove} from './userActions'
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
    isPendingUser: state.requestUser.isPendingUser,
    userMovies: state.requestUser.userMovies,
    userError: state.requestUser.userError,
    loggedIn: state.getMovieDetail.loggedIn,
    user: state.getMovieDetail.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestMovies: () => dispatch(requestMovies()),
    onGetMovieDetail: (event) => dispatch(getMovieDetail(event.currentTarget.id)),
    onRenderPage: (event) => dispatch(renderPage(event.target.id)),
    onSearchInput: (event) => dispatch(searchInput(event.target.value)),
    onSearchDetail: (a) => dispatch(searchDetail(a)),
    onRequestUser: (id) => dispatch(requestUser(id)),
    onUserLogin: (user) => dispatch(userLogin(user)),
    onUserLogout: () => dispatch(userLogout()),
    onUserSave: (id, data) => dispatch(userSave(id, data)),
    onUserRemove: (data) => dispatch(userRemove(data))
  }
}

class App extends Component {

  dbUserSave = (data) => {
    fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.user.id,
        movie_id: data.id,
        movies_data: data
      })
    })
    .then(this.props.onUserSave(this.props.user.id, data))
  }

  dbUserRemove = (data) => {
    fetch('http://localhost:4000/remove', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.user.id,
        movie_id: data.id
      })
    })
    .then(this.props.onUserRemove(JSON.stringify(data.id)))
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
            loggedIn={this.props.loggedIn}
            user={this.props.user}
            onUserLogout={this.props.onUserLogout}
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
              loggedIn={this.props.loggedIn} 
              onUserSave={this.dbUserSave}
              />
            }
            {renderPage === 'upcoming' &&
            <Upcoming 
              movies={movies[2]} 
              getMovieDetail={onGetMovieDetail} 
              head={"Upcoming"}
              loggedIn={this.props.loggedIn} 
              onUserSave={this.dbUserSave} 
              />
            }
            {renderPage === 'nowplaying' &&
            <NowPlaying 
              movies={movies[1]} 
              getMovieDetail={onGetMovieDetail} 
              head={"Now Playing"}
              loggedIn={this.props.loggedIn} 
              onUserSave={this.dbUserSave}
              />
            }
            {renderPage === 'popular' &&
            <Popular 
              movies={movies[3]} 
              getMovieDetail={onGetMovieDetail} 
              head={"Popular"}
              loggedIn={this.props.loggedIn} 
              onUserSave={this.dbUserSave}
              />
            }
            {renderPage === 'about' &&
            <About/>
            }
            {renderPage === 'search' &&
            <SearchResults movies={movie2[0]} getMovieDetail={onGetMovieDetail} head={'Search Results'}/>
            }
            {renderPage === 'signin' && this.props.loggedIn === false &&
            <SignIn onRequestUser={this.props.onRequestUser} renderPage={onRenderPage} onUserLogin={this.props.onUserLogin} head={'Sign In'} />
            }
            {this.props.loggedIn === true && renderPage === 'userDetail' &&
            <UserDetail 
              userId={this.props.user.id} 
              getMovieDetail={onGetMovieDetail} 
              userName={this.props.user.name}
              onRequestUser={this.props.onRequestUser}
              userMovies={this.props.userMovies}
              isPendingUser={this.props.isPendingUser}
              renderPage={renderPage}
              dbUserRemove={this.dbUserRemove}
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
