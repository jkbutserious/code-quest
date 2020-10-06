import formVisibleReducer from './formVisibleReducer';
import questReducer from './questReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterQuestList: questReducer,
  firestore: firestoreReducer
});

export default rootReducer;