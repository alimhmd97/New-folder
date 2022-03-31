import { actionTypes } from "../actions/actionTypes";

export const cardItemsReducer = (state = { cardItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.DELETE_FROM__CARD:
      state.cardItems.splice(state.cardItems.indexOf(action.payload), 1);
      return { ...state, cardItems: state.cardItems };

    case actionTypes.ADD_TO_CARD:
      state.cardItems.push(action.payload);

      return { ...state, cardItems: state.cardItems };
    default:
      return { ...state };
  }
};
