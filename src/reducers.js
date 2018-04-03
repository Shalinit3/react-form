import { combineReducers } from 'redux';

const demo = (state= {}, action) => {
  return {
    ...state,
  };
};

export default combineReducers({
  demo,
});
