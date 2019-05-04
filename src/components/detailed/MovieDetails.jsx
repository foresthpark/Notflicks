import React from "react"
import {connect} from 'react-redux'
import {requestDetail} from './actions'
import Loading from "../loading/Loading";
import DetailBackdrop from "./DetailBackdrop"
import RelatedCard from "../cards/RelatedCard";

const mapStateToProps = (state) => {
  return {
    isPending: state.requestDetail.isPending,
    movie: state.requestDetail.movie,
    error: state.requestDetail.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestDetail: (id) => dispatch(requestDetail(id)),
  }
};

class MovieDetails extends React.Component {
  componentDidMount() {
    this.props.onRequestDetail(this.props.movieId)
  }

  onClick = (event) => {
    this.props.onRequestDetail(event.currentTarget.id)
  };

  render() {
    const {movie, isPending} = this.props;
    const backdrop = {
      width: "100%",
      height: "100%"
    };

    return isPending ? <Loading/> :
      (
        <div style={backdrop}>
          <DetailBackdrop movie={movie}/>
          <RelatedCard movie={movie} clicker={this.onClick}/>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
