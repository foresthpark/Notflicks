import React from "react"
import Loading from "../loading/Loading";
import UserMovies from "../cards/UserMovies";
import "../css/moviecard.css"

class UserDetail extends React.Component {

  render(){
    const {isPendingUser, userMovies, getMovieDetail, userName, renderPage, dbUserRemove} = this.props
   
    return isPendingUser ? <Loading/> :
    (
      <UserMovies 
        userMovies={userMovies}
        clicker={getMovieDetail}
        userName={userName}
        renderPage={renderPage}
        dbUserRemove={dbUserRemove}
        userId={this.props.userId}
      />
    )
  }
}

export default UserDetail