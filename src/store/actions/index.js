import axios from "../../axios";
import { actionTypes } from "./actionTypes";

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      let data = await axios.get("");
      dispatch(setItems(data));
    } catch (err) {
      fetchItemsFailed(err);
    }
  };
};
const setItems = (items) => {
  return {
    type: actionTypes.FETCH_ITEMS,
    payLoad: items,
  };
};
const fetchItemsFailed = (error) => {
  return {
    type: "ERROR",
    payLoad: true,
  };
};

export const addFilter = (filter) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.ADD_FILTER, payload: filter });
  };
};
export const deleteFilter = (filter) => {
  return {
    type: actionTypes.DELETE_FILTER,
    payload: filter,
  };
};

export const addToWishList = (item) => {
  return {
    type: actionTypes.ADD_TO_WISH_LIST,
    payload: item,
  };
};

export const deleteFromWishList = (item) => {
  return {
    type: actionTypes.DELETE_FROM_WISH_LIST,
    payload: item,
  };
};
export const addToCard = (item) => {
  return {
    type: actionTypes.ADD_TO_CARD,
    payload: item,
  };
};

export const deleteFromCard = (item) => {
  return {
    type: actionTypes.DELETE_FROM__CARD,
    payload: item,
  };
};

export const filterBYAge = (items, minAge, maxAge) => {
  return {
    type: actionTypes.FILTER_BY_AGE,
    minAge,
    maxAge,
    items,
  };
};

export const filterBYTheme = (items, Theme) => {
  return {
    type: actionTypes.FILTER_BY_THEME,
    Theme,
    items,
  };
};
