import React from "react"
import Loading from "../loading/Loading";
import SearchResults from "./SearchResults";

const SearchResultsPage = (props) => {
  const {movies, getMovieDetail, isPending2, searchInputField, loggedIn, onUserSave, renderPage} = props

  return isPending2 ? <Loading/> :
    (
      <SearchResults
        getMovieDetail={getMovieDetail}
        movies={movies}
        isPending2={isPending2}
        searchInputField={searchInputField}
        loggedIn={loggedIn}
        head={'Search Results'}
        userId={props.userId}
        onUserSave={onUserSave}
        renderPage={renderPage}
      />
    );
}

export default SearchResultsPage