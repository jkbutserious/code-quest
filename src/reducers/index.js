import formVisibleReducer from './formVisibleReducer';
import questReducer from './questReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import selectedQuestReducer from './selectedQuestReducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterQuestList: questReducer,
  firestore: firestoreReducer,
  selectedQuest: selectedQuestReducer
});

export default rootReducer;