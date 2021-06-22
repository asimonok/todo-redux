import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterReducer from './filterReducer';
import { todoReducer } from './todoReducer';
import { permanentMiddleware } from './permanentMiddleware'

const enhancer = composeWithDevTools(applyMiddleware(permanentMiddleware));

const store = createStore(
  combineReducers({
    todoReducer,
    filterReducer,
  }),
    JSON.parse(localStorage.getItem('state')) || undefined,
    enhancer,
);

export default store;
