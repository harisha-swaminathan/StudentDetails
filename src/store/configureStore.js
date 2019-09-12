import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import studentsReducer from '../reducers/students';
import filter from '../reducers/filter'


export default () => {
  const store = createStore(
    combineReducers({
      students: studentsReducer,
      filter: filter
    }),
    devToolsEnhancer()
  );

  return store;
};