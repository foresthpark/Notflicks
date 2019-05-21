import {
  REQUEST_USER_PENDING,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILED,
} from './constants'

export const requestUser = (text) => async (dispatch) => {
  const urls = [`http://localhost:3002/user/${text}`]
  try {
    dispatch({type: REQUEST_USER_PENDING})
    const data = await Promise.all(urls.map(async function (url) {
      const response = await fetch(url)
      return response.json()
    }))
    await dispatch({type: REQUEST_USER_SUCCESS, payload: data})
  } catch (err) {
    dispatch({type: REQUEST_USER_FAILED, payload: err})
  }
}