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
