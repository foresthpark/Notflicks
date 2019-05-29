import React from "react"
import CastFace from "./CastFace";
import CastRelatedMovies from "./CastRelatedMovies";
import {requestCastDetail} from "./actions";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Loading from "../../loading/Loading";
import '../../css/castpage.css'

const mapStateToProps = (state) => {
  return {
    isPending: state.requestCastDetail.isPending,
    castMovies: state.requestCastDetail.castMovies,
    error: state.requestCastDetail.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestCastDetail: (id) => dispatch(requestCastDetail(id)),
  }
};

class CastPage extends React.Component {
  componentDidMount() {
    this.props.onRequestCastDetail(Number(this.props.match.params.castId))
  }

  render() {
    const {castMovies, isPending} = this.props;

    return isPending ? <Loading/> :
      (
        <div className='castpage'>
          <div className='castface'>
            <CastFace
              picture={castMovies[0].profile_path}
              birthday={castMovies[0].birthday}
              name={castMovies[0].name}
              birthplace={castMovies[0].place_of_birth}
              id={castMovies[0].id}
            />
          </div>
          <div className='castrelatedmovies'>
            <CastRelatedMovies movies={castMovies[1].cast}/>
          </div>
        </div>
      );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CastPage))
