import * as ActionTypes from '../actions';

export default function rightbarReducer(
  state = {
    isVisable: false
  },
  action
) {
  switch (action.type) {
    case ActionTypes.TOGGLE_BAR:
      if (action.isVisable) {
        return { ...state, isVisable: false };
      }
      return {
        ...state,
        isVisable: true
      };
    default:
      return state;
  }
}
