import {
  REQUEST_MOVIES_PENDING,
  REQUEST_MOVIES_SUCCESS,
  REQUEST_MOVIES_FAILED,
  GET_MOVIE_DETAIL,
  GET_RENDER_DETAIL,
  GET_SEARCH_INPUT,
  REQUEST_SEARCH_PENDING,
  REQUEST_SEARCH_SUCCESS,
  REQUEST_SEARCH_FAILED,
} from './constants'

//get movie details to load main pages

const urls = [
  'https://api.themoviedb.org/3/movie/top_rated?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1',
  'https://api.themoviedb.org/3/movie/now_playing?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1',
  'https://api.themoviedb.org/3/movie/upcoming?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1',
  'https://api.themoviedb.org/3/movie/popular?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1'
]

export const requestMovies = () => async (dispatch) => {
  try {
    dispatch({type: REQUEST_MOVIES_PENDING})
    const data = await Promise.all(urls.map(async function (url) {
      const response = await fetch(url)
      return response.json()
    }))
    await dispatch({type: REQUEST_MOVIES_SUCCESS, payload: data})
  } catch (err) {
    dispatch({type: REQUEST_MOVIES_FAILED, payload: err})
  }
}

//set movie detial to state and render detial page

export const getMovieDetail = (text) => ({
  type: GET_MOVIE_DETAIL,
  payload: text,
  renderDetail: false
})

//set state to render main pages

export const renderPage = (text) => ({
  type: GET_RENDER_DETAIL,
  payload: text
})

//set search input field to state

export const searchInput = (text) => ({
  type: GET_SEARCH_INPUT,
  payload: text
})

//call movie api to get detailed movie info for detial page render

export const searchDetail = (text) => async (dispatch) => {
  const urls = [
    //movie search API
    `https://api.themoviedb.org/3/search/movie?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&query=${text}&page=1&include_adult=false`
  ]
  try {
    dispatch({type: REQUEST_SEARCH_PENDING})
    const data = await Promise.all(urls.map(async function (url) {
      const response = await fetch(url)
      return response.json()
    }))
    await dispatch({type: REQUEST_SEARCH_SUCCESS, payload: data})
  } catch (err) {
    dispatch({type: REQUEST_SEARCH_FAILED, payload: err})
  }
}
