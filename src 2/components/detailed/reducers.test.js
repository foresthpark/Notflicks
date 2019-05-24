import * as reducers from './reducers'
import * as types from './constants'

//TEST REQUESTMOVIES REDUCER

describe('requestDetail reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.requestDetail(undefined, {})).toEqual(
      {
        isPending: true,
        movie: [],
        error: ''
      }
    )
  })

  it('should handle REQUEST_DETAIL_PENDING', () => {
    expect(
      reducers.requestDetail({}, {
        type: types.REQUEST_DETAIL_PENDING,
      })
    ).toEqual(
      {
        isPending: true,
      }
    )
  })

    it('should handle REQUEST_MOVIES_SUCCESS', () => {
      expect(
        reducers.requestDetail({}, {
          type: types.REQUEST_DETAIL_SUCCESS,
          payload: 'movie1'
        })
      ).toEqual(
        {
          isPending: false,
          movie: 'movie1',
        }
      )
  })

    it('should handle REQUEST_DETAIL_FAILED', () => {
      expect(
        reducers.requestDetail({}, {
          type: types.REQUEST_DETAIL_FAILED,
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