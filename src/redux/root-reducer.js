import { combineReducers } from 'redux';
import questionReducer from './question.reducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  question: questionReducer,
  form: formReducer
});