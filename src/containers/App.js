import React, {Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from 'react-redux'
import Scroll from "../components/navigation/Scroll";
import {requestMovies, getMovieDetail, renderPage, searchInput, searchDetail, userLogin, userLogout} from './actions'
import {requestUser, userSave, userRemove} from "./userActions";
import TopRated from "../components/cards/TopRated";
import MovieDetails from '../components/detailed/MovieDetails'
import NowPlaying from "../components/cards/NowPlaying";
import Upcoming from "../components/cards/Upcoming";
import CarouselCard from "../components/cards/CarouselCard";
import Loading from "../components/loading/Loading";
import About from "../components/navigation/About";
import SearchResultsPage from "../components/cards/SearchResultsPage";
import UserDetail from '../components/userdetail/UserDetail'
import Register from '../components/register/Register'
import NavBar from '../components/navigation/NavBar'
import SignIn from '../components/signin/Signin'
import {dbUserSave, dbUserRemove} from '../serverRequests/serverRequests'
import CastPage from "../components/cards/CastPage/CastPage";

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
    user: state.getMovieDetail.user,
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

  saveDb = (data, userId) => {
    dbUserSave(data, userId)
      .then(movie => {
        if (movie.movie_id) {
          this.props.onUserSave(userId, data)
        }
      })
  }

  removeDb = (data, userId) => {
    dbUserRemove(data, userId)
      .then(this.props.onUserRemove(JSON.stringify(data.id)))
  }

  componentDidMount() {
    this.props.onRequestMovies()
  }

  render() {
    const {movies, isPending, onGetMovieDetail, onRenderPage, movie2, loggedIn} = this.props
    return isPending ? <Loading/> :
      (
        <Router>
          <Route
            path={'/'}
            render={(props) => <NavBar {...props}
                                       userId={this.props.user.id}
                                       renderPage={onRenderPage}
                                       searchInput={this.props.onSearchInput}
                                       searchInputField={this.props.searchInputField}
                                       searchDetail={this.props.onSearchDetail}
                                       loggedIn={this.props.loggedIn}
                                       user={this.props.user}
                                       onUserLogout={this.props.onUserLogout}
            />}
          />

          <Scroll>
            <Route exact path={'/'} render={(props) => (<CarouselCard {...props} movies={movies}
                                                                      getMovieDetail={onGetMovieDetail}
                                                                      renderPage={onRenderPage}/>)}
            />


            <Route
              exact
              path={'/toprated'}
              render={(props) => <TopRated {...props}
                                           userId={this.props.user.id}
                                           movies={movies[0]}
                                           getMovieDetail={onGetMovieDetail}
                                           head={"Top Rated"}
                                           loggedIn={this.props.loggedIn}
                                           onUserSave={this.saveDb}
              />}
            />

            <Route
              exact
              path={'/nowplaying'}
              render={(props) => <NowPlaying {...props}
                                             userId={this.props.user.id}
                                             movies={movies[1]}
                                             getMovieDetail={onGetMovieDetail}
                                             head={"Now Playing"}
                                             loggedIn={this.props.loggedIn}
                                             onUserSave={this.saveDb}
              />}
            />

            <Route
              exact
              path={'/upcoming'}
              render={(props) => <Upcoming {...props}
                                           movies={movies[2]}
                                           getMovieDetail={onGetMovieDetail}
                                           head={"Upcoming"}
                                           loggedIn={this.props.loggedIn}
                                           onUserSave={this.saveDb}
                                           userId={this.props.user.id}
              />}
            />

            <Route
              exact
              path={'/popular'}
              render={(props) => <Upcoming {...props}
                                           movies={movies[3]}
                                           getMovieDetail={onGetMovieDetail}
                                           head={"Popular"}
                                           loggedIn={this.props.loggedIn}
                                           onUserSave={this.saveDb}
                                           userId={this.props.user.id}
              />}
            />

            <Route
              exact
              path={'/signin'}
              render={(props) => <SignIn {...props}
                                         onUserLogin={this.props.onUserLogin}
                                         head={'Sign In'}
                                         onRequestUser={this.props.onRequestUser}
                                         userId={this.props.user.id}
              />}
            />

            <Route exact path={'/about'} component={About}/>

            <Route exact
                   path={'/details/:movieId'}
                   render={(props) => <MovieDetails {...props}
                   />}/>

            <Route exact
                   path={'/cast/:castId'}
                   render={(props) => <CastPage {...props}
                   />}/>


            <Route
              exact
              path={'/results/search=:results'}
              render={(props) => <SearchResultsPage {...props}
                                                    getMovieDetail={onGetMovieDetail}
                                                    searchDetail={this.props.onSearchDetail}
                                                    searchInput={this.props.onSearchInput}
                                                    searchInputField={this.props.searchInputField}
                                                    movies={movie2}
                                                    isPending2={this.props.isPending2}
                                                    head={'Search Results'}
                                                    loggedIn={this.props.loggedIn}
                                                    userId={this.props.user.id}
                                                    onUserSave={this.saveDb}
                                                    renderPage={onRenderPage}
              />}/>

            <Route
              exact
              path={'/register'}
              render={(props) => <Register {...props}
                                           onRequestUser={this.props.onRequestUser}
                                           onUserLogin={this.props.onUserLogin}

              />}/>

            {loggedIn ?
              <Route
                exact
                path={'/user/:userid'}
                render={(props) => <UserDetail {...props}
                                               getMovieDetail={onGetMovieDetail}
                                               userName={this.props.user.name}
                                               onRequestUser={this.props.onRequestUser}
                                               userMovies={this.props.userMovies}
                                               isPendingUser={this.props.isPendingUser}
                                               renderPage={this.props.renderPage}
                                               dbUserRemove={this.removeDb}
                                               userId={this.props.user.id}
                />}/>
              :
              <Route
                exact
                path={'/user/:userid'}
                render={(props) => <SignIn {...props}
                                           onUserLogin={this.props.onUserLogin}
                                           head={'Sign In'}
                                           onRequestUser={this.props.onRequestUser}
                                           userId={this.props.user.id}
                />

                }/>
            }
          </Scroll>
        </Router>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
