import * as reducers from './reducers'
import * as types from './constants'

//TEST REQUESTMOVIES REDUCER

describe('requestMovies reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.requestMovies(undefined, {})).toEqual(
      {
        isPending: true,
        movies: [],
        error: '',
      }
    )
  })

  it('should handle REQUEST_MOVIES_PENDING', () => {
    expect(
      reducers.requestMovies({}, {
        type: types.REQUEST_MOVIES_PENDING,
      })
    ).toEqual(
      {
        isPending: true,
      }
    )
  })

    it('should handle REQUEST_MOVIES_SUCCESS', () => {
      expect(
        reducers.requestMovies({}, {
          type: types.REQUEST_MOVIES_SUCCESS,
          payload: 'movie1'
        })
      ).toEqual(
        {
          isPending: false,
          movies: 'movie1',
        }
      )
  })

    it('should handle REQUEST_MOVIES_FAILED', () => {
      expect(
        reducers.requestMovies({}, {
          type: types.REQUEST_MOVIES_FAILED,
          payload: 'error'
        })
      ).toEqual(
        {
          isPending: false,
          error: 'error',
        }
      )
  })
})

//TEST GETMOVIEDETAIL REDUCER

describe('getMovieDetail reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.getMovieDetail(undefined, {})).toEqual(
      {
        movieId: null,
        renderDetail: false,
        renderPage: 'notflicks',
        isPending2: true,
        movie2: [],
        error2: '',
        searchInputField: ''
      }
    )
  })

  it('should handle REQUEST_MOVIES_PENDING', () => {
    expect(
      reducers.getMovieDetail({}, {
        type: types.GET_MOVIE_DETAIL,
        payload: 'hellboy',
      })
    ).toEqual(
      {
        movieId: 'hellboy',
        renderDetail: true,
      }
    )
  })

    it('should handle GET_RENDER_DETAIL', () => {
      expect(
        reducers.getMovieDetail({}, {
          type: types.GET_RENDER_DETAIL,
          payload: 'home'
        })
      ).toEqual(
        {
          renderPage: 'home',
          renderDetail: false
        }
      )
  })

    it('should handle REQUEST_SEARCH_PENDING', () => {
      expect(
        reducers.getMovieDetail({}, {
          type: types.REQUEST_SEARCH_PENDING,
        })
      ).toEqual(
        {
          isPending2: true,
        }
      )
  })

  it('should handle REQUEST_SEARCH_SUCCESS', () => {
    expect(
      reducers.getMovieDetail({}, {
        type: types.REQUEST_SEARCH_SUCCESS,
        payload: 'avengers'
      })
    ).toEqual(
      {
        renderDetail: false,
        renderPage: 'search',
        isPending2: false,
        movie2: 'avengers',
        searchInputField: ''
      }
    )
})

it('should handle REQUEST_SEARCH_FAILED', () => {
  expect(
    reducers.getMovieDetail({}, {
      type: types.REQUEST_SEARCH_FAILED,
      payload: 'error'
    })
  ).toEqual(
    {
      error2: 'error',
      isPending2: false
    }
  )
})

it('should handle REQUEST_SEARCH_FAILED', () => {
  expect(
    reducers.getMovieDetail({}, {
      type: types.GET_SEARCH_INPUT,
      payload: 'the godfather'
    })
  ).toEqual(
    {
      searchInputField: 'the godfather'
    }
  )
})

})