import formVisibleReducer from './form-visible-reducer';
import quest-reducer from './quest-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterQuestList: quest-reducer
});

export default rootReducer;