import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from './actions'
import * as types from './constants'

describe('actions', () => {
  it('should create an action to get movie ID', () => {
    const text = '12345'
    const detail = false
    const expectedAction = {
      type: types.GET_MOVIE_DETAIL,
      payload: text,
      renderDetail: detail
    }
    expect(actions.getMovieDetail(text)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to set the render page detail', () => {
    const text = 'homepage'
    const expectedAction = {
      type: types.GET_RENDER_DETAIL,
      payload: text,
    }
    expect(actions.renderPage(text)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to set the searchfield value', () => {
    const text = 'hellboy'
    const expectedAction = {
      type: types.GET_SEARCH_INPUT,
      payload: text,
    }
    expect(actions.searchInput(text)).toEqual(expectedAction)
  })
})

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore()
//   })

  

//   it('creates REQUEST_MOVIES_SUCCESS when fetching movies has been done', () => {
//     fetchMock.getOnce('https://api.themoviedb.org/3/movie/top_rated?api_key=5abdca519fcfe51f18cec09aefcec6b4&language=en-US&page=1', {
//       body: {movies: 'hello'},
//       headers: { 'content-type': 'application/json' }
//       // { movies: ['movie name'] }
//   })

//     const expectedActions = [
//       { type: types.REQUEST_MOVIES_PENDING},
//       { type: types.REQUEST_MOVIES_SUCCESS, payload: [{movies:'hello'}] }
//     ]
//     const store = mockStore({ movies: [],  })

//     return store.dispatch(actions.requestMovies()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })