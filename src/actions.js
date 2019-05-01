import { 
	REQUEST_MOVIES_PENDING,
	REQUEST_MOVIES_SUCCESS,
	REQUEST_MOVIES_FAILED,
	GET_MOVIE_DETAIL,
	REQUEST_DETAIL_PENDING,
	REQUEST_DETAIL_SUCCESS,
	REQUEST_DETAIL_FAILED,
} from './constants'

const urls = [
	'https://api.themoviedb.org/3/movie/top_rated?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1',
	'https://api.themoviedb.org/3/movie/now_playing?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1',
	'https://api.themoviedb.org/3/movie/upcoming?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1'
]

export const requestMovies = () => async (dispatch) => {
	try{
		dispatch({ type: REQUEST_MOVIES_PENDING})
		const data = await Promise.all(urls.map(async function(url){
				const response = await fetch(url)
				return response.json()
		}))
		await dispatch({ type: REQUEST_MOVIES_SUCCESS, payload: data})
	} catch (err) {
		dispatch({type: REQUEST_MOVIES_FAILED, payload: err})
	}
}

export const getMovieDetail = (text) => ({
	type: GET_MOVIE_DETAIL,
	payload: text,
	renderDetail: false
})

export const getDetailMovie = (text) => async (dispatch) => {
	const urls = [
		`https://api.themoviedb.org/3/movie/${text}?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US`
	]
	try{
		dispatch({ type: REQUEST_DETAIL_PENDING})
		const data = await Promise.all(urls.map(async function(url){
				const response = await fetch(url)
				return response.json()
		}))
		await dispatch({ type: REQUEST_DETAIL_SUCCESS, payload: data})
	} catch (err) {
		dispatch({type: REQUEST_DETAIL_FAILED, payload: err})
	}
}
