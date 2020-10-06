import formVisibleReducer from './form-visible-reducer';
import quest-reducer from './quest-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterQuestList: quest-reducer
  firestore: firestoreReducer
});

export default rootReducer;