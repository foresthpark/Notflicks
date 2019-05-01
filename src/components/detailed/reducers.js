import { 
	REQUEST_DETAIL_PENDING,
	REQUEST_DETAIL_SUCCESS,
	REQUEST_DETAIL_FAILED,
} from './constants'

const initialStateIndiv = {
	isPending: true,
	movie: [],
	error: ''
}

export const requestDetail = (state=initialStateIndiv, action={}) => {
	switch (action.type) {
		case REQUEST_DETAIL_PENDING:
			return {...state, isPending: true }
		case REQUEST_DETAIL_SUCCESS:
			return {...state, movie: action.payload, isPending: false}
		case REQUEST_DETAIL_FAILED:
			return {...state, error: action.payload, isPending: false}
		default:
			return state
	}
}