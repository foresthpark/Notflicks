import {
  REQUEST_CAST_DETAIL_PENDING,
  REQUEST_CAST_DETAIL_SUCCESS,
  REQUEST_CAST_DETAIL_FAILED,
} from './constants'

// Your API Key
const API_KEY = '5abdca519fcfe51f18cec09aefcec6b4'

//get detail movie data from API
export const requestCastDetail = (text) => async (dispatch) => {
  const urls = [
    //Cast Detail API
    `https://api.themoviedb.org/3/person/${text}?api_key=${API_KEY}&language=en-US`,
    //Cast Related Movies API
    `https://api.themoviedb.org/3/person/${text}/movie_credits?api_key=${API_KEY}&language=en-US`
  ]
  try {
    dispatch({type: REQUEST_CAST_DETAIL_PENDING})
    const data = await Promise.all(urls.map(async function (url) {
      const response = await fetch(url)
      return response.json()
    }))
    await dispatch({type: REQUEST_CAST_DETAIL_SUCCESS, payload: data})
  } catch (err) {
    dispatch({type: REQUEST_CAST_DETAIL_FAILED, payload: err})
  }
}