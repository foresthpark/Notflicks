import React from "react"
import {connect} from 'react-redux'
import {requestDetail} from './actions'
import Loading from "../loading/Loading";
import DetailBackdrop from "./DetailBackdrop"
import Synopsis from "./Synopsis";
import DetailCard from "../cards/DetailCard";
import { getMovieDetail } from "../../actions";

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
    const {movie, getMovieDetail} = this.props
    const backdrop = {
      width: "100%",
      height: "100%"
    }

    return this.props.isPending ? <Loading/> :
      (
        <div style={backdrop}>
          <DetailBackdrop movie={movie}/>
          <Synopsis movie={movie}/>
          <DetailCard movie={movie} getMovieDetail={getMovieDetail}/>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
