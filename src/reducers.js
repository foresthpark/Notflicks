import { 
	REQUEST_MOVIES_PENDING,
	REQUEST_MOVIES_SUCCESS,
	REQUEST_MOVIES_FAILED,
	GET_MOVIE_DETAIL,
	GET_RENDER_DETAIL,
} from './constants'

const intialStateMovies = {
	isPending: true,
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

const intialStateDetail = {
	movieId: null,
	renderDetail: false,
	renderPage: 'notflicks'
}

export const getMovieDetail = (state=intialStateDetail, action={}) => {
	switch (action.type) {
		case GET_MOVIE_DETAIL:
			return {...state, movieId: action.payload, renderDetail: true}
		case GET_RENDER_DETAIL:
			return {...state, renderPage: action.payload, renderDetail: false}
		default:
			return state
	}
}

// const intialStateRender = {
// 	renderPage: 'notflicks'
// }

// export const renderPage = (state=intialStateRender, action={}) => {
// 	switch (action.type) {
// 		case GET_RENDER_DETAIL:
// 			return {...state, renderPage: action.payload}
// 		default:
// 			return state
// 	}
// }