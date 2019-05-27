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
	USER_LOGIN,
	USER_LOGOUT,
} from './constants'

//set state with data from intial API call

const intialStateMovies = {
	isPending: true,
	movies: [],
	error: '',
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

//set state with detailed movie data, set state for render and search input 

const intialStateDetail = {
	movieId: null,
	renderDetail: false,
	renderPage: 'notflicks',
	isPending2: true,
	movie2: [],
	error2: '',
	searchInputField: '',
	loggedIn: false,
	user: {
		id: '',
		name: '',
		email: ''
	}
}

export const getMovieDetail = (state=intialStateDetail, action={}) => {
	switch (action.type) {
		case GET_MOVIE_DETAIL:
			return {...state, movieId: action.payload, renderDetail: true}
		case GET_RENDER_DETAIL:
			return {...state, renderPage: action.payload, renderDetail: false}
		case REQUEST_SEARCH_PENDING:
			return {...state, isPending2: true }
		case REQUEST_SEARCH_SUCCESS:
			return {...state, movie2: action.payload, isPending2: false, renderDetail: false, renderPage: 'search', searchInputField: ''}
		case REQUEST_SEARCH_FAILED:
			return {...state, error2: action.payload, isPending2: false}
		case GET_SEARCH_INPUT:
			return {...state, searchInputField: action.payload}
		case USER_LOGIN:
			return {...state, renderPage: 'userDetail', loggedIn: true, user: {id: action.payload.id, name: action.payload.name, email: action.payload.email}}
		case USER_LOGOUT:
			return {...state, renderPage: 'notflicks', loggedIn: false, user: {id:'', name:'', email:''}}
		default:
			return state
	}
}