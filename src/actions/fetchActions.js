import axios from "axios";

import {
    DISHES_API
} from "../config/remoteUrls";
import { FETCH_DISHES, 
  SEARCH_FILTER,
  CATEGORY_FILTER, 
  UPDATE_CART} from "./types";

export const fetchDishes = () => dispatch => {

  axios
    .get(DISHES_API)
    .then(res => {
      dispatch({
        type: FETCH_DISHES,
        payload: res.data
      });
    })
    .catch(err => console.log(err.message));
};

export const filterBySearch = value => dispatch => {
  dispatch({
    type: SEARCH_FILTER,
    payload: value
  })
}

export const filterByCategory = value => dispatch => {
  dispatch({
    type: CATEGORY_FILTER,
    payload: value
  })
}

export const updateCartAction = (value, name) => dispatch => {
  dispatch({
    type: UPDATE_CART,
    payload: value,
    name
  })
}