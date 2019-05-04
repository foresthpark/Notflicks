import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {getMovieDetail, requestMovies} from "./reducers";
import {requestDetail} from "../components/detailed/reducers";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const logger = createLogger()
  const rootReducer = combineReducers({requestMovies, getMovieDetail, requestDetail})
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
  
  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
