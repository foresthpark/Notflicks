import React from "react"
import MovieCard from "./MovieCard";
import "./moviecard.css"

class TopRated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailspage: false,
      selectedmovie: null
    }
  }

  componentWillMount() {
    console.log("will mount")
  }

  _callApi = () => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=54a6da9b2f0cfa83e47f01933cf7ab76&language=en-US&page=1`)
      .then(potato => potato.json())
      // .then(json => console.log(json))
      .then(json => json.results)
      .catch((err => console.log(err)))
  }

  componentDidMount() {
    this._getMovies()
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
    console.log(this.state.movies)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) =>
      <MovieCard
        title={movie.original_title}
        poster={movie.poster_path}
        synopsis={movie.overview}
        release={movie.release_date}
        movieid={movie.id}
        rating={movie.vote_average}
        index={index}
        clicker={this.clickHandler}
      />
    );
    return movies
  }

  clickHandler = (event) => {
    this.setState({
      detailspage: true,
      selectedmovie: event.currentTarget.id
    }, () => console.log(this.state.selectedmovie))

  }

  render() {
    return (
      <div className="moviecard">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default TopRated
