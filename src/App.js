import React, {Component} from 'react'
import { connect } from 'react-redux'
import NavBar from "./components/NavBar"
import MovieDetail from './components/MovieDetail'
import MainCarousel222 from "./components/Landing/MainCarousel222"
import CarouselPage from "./components/Landing/CarouselPage"
import {requestMovies} from './actions'
import PureReactCarousel from "./components/Landing/PureReactCarousel";
import NukaCarousel from "./components/Landing/NukaCarousel";
import SimpleSlider from "./components/Landing/SimpleSlider";
import "./App.css"
import MovieCard from "./components/Landing/MovieCard";

const mapStateToProps = (state) => {
  return {
    isPending: state.requestMovies.isPending,
    movies: state.requestMovies.movies,
    error: state.requestMovies.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestMovies: () => dispatch(requestMovies())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestMovies()
  }

  render(){
  //   const { movies, isPending, error } = this.props
  //   console.log('aap', movies)
  //   return isPending ? 
  //   <h1>loading....</h1> :


  
  //   // const movieDetail = movies.map( movie => movie.results)
  //   // console.log(movieDetail[0])
  //   // for(let x in movies[0]){
  //   //   console.log(x)
  //   // }

  //   // setTimeout(() => {
  //   //   console.log(movies[0].results[0].title)
  //   // }, 3000)
    
  // (
  //   <div className = "App">
  //     <NavBar />
  //     <MovieDetail movies = {movies} />
  //   </div>
  // )

    const images = ["https://via.placeholder.com/600/92c952",
      "https://via.placeholder.com/600/771796",
      "https://via.placeholder.com/600/24f355",
      "https://via.placeholder.com/600/d32776",
      "https://via.placeholder.com/600/f66b97"
    ]

    const moviecards = images.map((image, index) =>
      <MovieCard image={image} index={index}/>
    )


    return (
      <div className="App">
        <NavBar/>
        <div className="sliderdiv">
          {/*<SimpleSlider/>*/}
          <NukaCarousel/>
          {moviecards}
        </div>
      </div>
    )

}
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 
