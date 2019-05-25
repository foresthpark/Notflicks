import React from "react"
import Loading from "../loading/Loading";
import UserMovies from "../cards/UserMovies";
import "../css/moviecard.css"

class UserDetail extends React.Component {

  // componentDidMount() {
  //   this.props.onRequestUser(this.props.userId)
  // }

  render(){
    return this.props.isPendingUser ? <Loading/> :
    (
      <UserMovies 
        userMovies={this.props.userMovies}
        clicker={this.props.getMovieDetail}
        userName={this.props.userName}
        renderPage={this.props.renderPage}
        dbUserRemove={this.props.dbUserRemove}
      />
    )
  }
}

export default UserDetail