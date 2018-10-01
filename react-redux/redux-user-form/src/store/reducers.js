import { combineReducers } from 'redux';

const changeData = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state;
  }
};

export const userFormApp = combineReducers({
  name: changeData
});
