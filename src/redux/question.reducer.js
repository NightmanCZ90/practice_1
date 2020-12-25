import { QuestionActionTypes } from './question.types';

const { WHO, WHAT, WHEN, WHERE, NEW } = QuestionActionTypes;

const INITIAL_STATE = {
  display: 'who',
  who: '',
  what: '',
  when: '',
  where: ''
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WHO:
      return {
        ...state,
        who: action.payload,
        display: 'what'
      }

    case WHAT:
      return {
        ...state,
        what: action.payload,
        display: 'when'
      }

    case WHEN:
      return {
        ...state,
        when: action.payload,
        display: 'where'
      }

    case WHERE:
      return {
        ...state,
        where: action.payload,
        display: 'sentence'
      }

    case NEW:
      return INITIAL_STATE

    default:
      return state;
  }
};

export default questionReducer;