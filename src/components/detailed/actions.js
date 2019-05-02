import { 
	REQUEST_DETAIL_PENDING,
	REQUEST_DETAIL_SUCCESS,
	REQUEST_DETAIL_FAILED,
} from './constants'



export const requestDetail = (text) => async (dispatch) => {
  const urls = [
    //movie detail API
    `https://api.themoviedb.org/3/movie/${text}?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US`,
    //get recommended API
		`https://api.themoviedb.org/3/movie/${text}/recommendations?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1`,
		//get videos API
		`https://api.themoviedb.org/3/movie/${text}/videos?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US`,
		//get credits API
		`https://api.themoviedb.org/3/movie/${text}/credits?api_key=5abdca519fcfe51f18cec09aefcec6b4`,
		//get reviews API
		`https://api.themoviedb.org/3/movie/${text}/reviews?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1`
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