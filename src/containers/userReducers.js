import { 
	REQUEST_USER_PENDING,
	REQUEST_USER_SUCCESS,
	REQUEST_USER_FAILED,
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
		default:
			return state
	}
}