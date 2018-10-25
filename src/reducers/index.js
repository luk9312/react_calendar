import { combineReducers } from 'redux';
import calendar from './calendar';
import property from './property';

export default combineReducers({
  calendar,
  property
})