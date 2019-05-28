import React from "react"
import Loading from "../loading/Loading";
import SearchResults from "./SearchResults";

const SearchResultsPage = (props) => {
  const {movies, getMovieDetail, isPending2, searchInputField} = props

  return isPending2 ? <Loading/> :
    (
      <SearchResults
        getMovieDetail={getMovieDetail}
        movies={movies}
        isPending2={isPending2}
        searchInputField={searchInputField}
        head={'Search Results'}
        userId={props.userId}
      />
    );
}

export default SearchResultsPage