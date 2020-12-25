import { QuestionActionTypes } from './question.types';

export const setWho = word => {
  return {
    type: QuestionActionTypes.WHO,
    payload: word
  }
};

export const setWhat = word => {
  return {
    type: QuestionActionTypes.WHAT,
    payload: word
  }
};

export const setWhen = word => {
  return {
    type: QuestionActionTypes.WHEN,
    payload: word
  }
};

export const setWhere = word => {
  return {
    type: QuestionActionTypes.WHERE,
    payload: word
  }
};

export const setNew = () => {
  return {
    type: QuestionActionTypes.NEW
  }
};