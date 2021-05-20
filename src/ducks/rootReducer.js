import {combineReducers} from 'redux';
import {reducer as articles} from './articles';

export default combineReducers({
  articles,
});
