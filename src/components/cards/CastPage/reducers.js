import {
  REQUEST_CAST_DETAIL_PENDING,
  REQUEST_CAST_DETAIL_SUCCESS,
  REQUEST_CAST_DETAIL_FAILED,
} from './constants'

const initialStateIndiv = {
  isPending: true,
  castMovies: [],
  error: ''
}

export const requestCastDetail = (state = initialStateIndiv, action = {}) => {
  switch (action.type) {
    case REQUEST_CAST_DETAIL_PENDING:
      return {...state, isPending: true}
    case REQUEST_CAST_DETAIL_SUCCESS:
      return {...state, castMovies: action.payload, isPending: false}
    case REQUEST_CAST_DETAIL_FAILED:
      return {...state, error: action.payload, isPending: false}
    default:
      return state
  }
}