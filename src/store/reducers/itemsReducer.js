import { actionTypes } from "../actions/actionTypes";

function handelDataReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
      return { ...state, items: action.payLoad.data };

    case actionTypes.FILTER_BY_AGE:
      action.items = state?.items.filter((item) => {
        return action.maxAge > item.Age && item.Age < action.minAge;
      });
      return { ...state, items: action.items };

    case actionTypes.FILTER_BY_THEME:
      action.items = state?.items.filter((item) => {
        return item.Theme.includes(action.Theme);
      });

      return { ...state, items: action.items };

    default:
      return { ...state };
  }
}

export { handelDataReducer };
