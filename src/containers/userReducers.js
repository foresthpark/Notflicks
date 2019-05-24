import { 
	REQUEST_USER_PENDING,
	REQUEST_USER_SUCCESS,
	REQUEST_USER_FAILED,
	SAVE_USER_MOVIE
} from './constants'

const initialStateUser = {
	isPendingUser: true,
	userMovies: [],
	userError: ''
}

export const requestUser = (state=initialStateUser, action={}) => {
	switch (action.type) {
		case REQUEST_USER_PENDING:
			return {...state, isPendingUser: true }
		case REQUEST_USER_SUCCESS:
			return {...state, userMovies: action.payload, isPendingUser: false}
		case REQUEST_USER_FAILED:
			return {...state, userError: action.payload, isPendingUser: false}
		case SAVE_USER_MOVIE:
			return {...state, userMovies: [...state.userMovies.concat({id: action.id, movieId: action.payload.id, movies_data: JSON.stringify(action.payload)})] }
		default:
			return state
	}
}