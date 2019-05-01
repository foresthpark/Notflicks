import React from "react"
import {connect} from 'react-redux'
import {requestDetail} from './actions'
import Loading from "../loading/Loading";
import DetailBackdrop from "./DetailBackdrop"
import Synopsis from "./Synopsis";
import DetailCard from "../cards/DetailCard";

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


  render() {
    const {movie} = this.props

    console.log('movieDetail', this.props.movie)

    const backdrop = {
      width: "100%",
      height: "100%"
    }

    return this.props.isPending ? <Loading/> :
      (
        <div style={backdrop}>
          <DetailBackdrop movie={movie}/>
          <Synopsis movie={movie}/>
          <DetailCard movie={movie}/>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
