import { actionTypes } from "../actions/actionTypes";
export const filterReducer = (state = { filterBy: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_FILTER:
      return { ...state, filterBy: [...state?.filterBy, action.payload] };
    case actionTypes.DELETE_FILTER:
      state.filterBy.splice(state.filterBy.indexOf(action.payload), 1);

      return {
        ...state,
        filterBy: [...state.filterBy],
      };
    default:
      return { ...state };
  }
};
