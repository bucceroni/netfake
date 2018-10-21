import api from "./api";
import * as types from "./types";

export function getUpcoming() {
  return async dispatch => {
    dispatch({
      type: types.GET_UPCOMING,
      payload: await api.getApi("/movie/upcoming?")
    });
  };
}

export function getMovieDetails(movieId) {
  return async dispatch => {
    dispatch({
      type: types.GET_MOVIEDETAILS,
      payload: await api.getApi(`/movie/${movieId}?`)
    });
  };
}

export function getMovieCast(movieId) {
  return async dispatch => {
    dispatch({
      type: types.GET_MOVIECAST,
      payload: await api.getApi(`/movie/${movieId}/credits?`)
    });
  };
}

export function cleanMovieDetails() {
  return async dispatch => {
    dispatch({
      type: types.CLEAN_MOVIEDETAILS,
      payload: {}
    });
  };
}

export function cleanMovieCast() {
  return async dispatch => {
    dispatch({
      type: types.CLEAN_MOVIECAST,
      payload: []
    });
  };
}

