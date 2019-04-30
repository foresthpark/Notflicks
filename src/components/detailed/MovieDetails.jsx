import React from "react"

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.sleMovie
    }
  }

  render() {
    const {movie} = this.state;
    console.log(movie)
    return (
      <div>
        {movie.id}
      </div>
    );
  }
}

export default MovieDetails
