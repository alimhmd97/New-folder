import { actionTypes } from "../actions/actionTypes";

export const wishListReducer = (state = { wishList: [] }, action) => {
  switch (action.type) {
    case actionTypes.DELETE_FROM_WISH_LIST:
      state.wishList.splice(state.wishList.indexOf(action.payload), 1);
      return { ...state, wishList: state.wishList };

    case actionTypes.ADD_TO_WISH_LIST:
      state.wishList.push(action.payload);
      state.wishList = state.wishList.filter((wishItem, index, wishList) => {
        return wishList.indexOf(wishItem) === index;
      });
      return { ...state, wishList: state.wishList };
    default:
      return { ...state };
  }
};
