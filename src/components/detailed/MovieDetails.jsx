import React from "react"
import {connect} from 'react-redux'
import { requestDetail } from './actions'

const mapStateToProps = (state) => {
  return {
    isPending: state.requestDetail.isPending,
    movie: state.requestDetail.movie,
    error: state.requestDetail.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestDetail: (id) => dispatch(requestDetail(id)),
  }
}

class MovieDetails extends React.Component {
  componentDidMount() {
    this.props.onRequestDetail(this.props.movieId)
  }

  render(){
    console.log('movieDetail', this.props.movie)
    return this.props.isPending ? <h1>Hello World</h1> :
    (
      <div> 
      <h1>{this.props.movie[0].title}</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
