import { 
	REQUEST_MOVIES_PENDING,
	REQUEST_MOVIES_SUCCESS,
	REQUEST_MOVIES_FAILED
} from './constants'

const intialStateMovies = {
	isPending: false,
	movies: [],
	error: ''
}

export const requestMovies = (state=intialStateMovies, action={}) => {
	switch (action.type) {
		case REQUEST_MOVIES_PENDING:
			return {...state, isPending: true }
		case REQUEST_MOVIES_SUCCESS:
			return {...state, movies: action.payload, isPending: false}
		case REQUEST_MOVIES_FAILED:
			return {...state, error: action.payload, isPending: false}
		default:
			return state
	}
}