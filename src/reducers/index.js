import { combineReducers } from 'redux';
import library from './libraryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  library,
  ajaxCallsInProgress
});

export default rootReducer;
