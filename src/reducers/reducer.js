import * as types from "../actions/types";

const initialState = {
  upcoming: [],
  movieDetails:{},
  movieCast:[]
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_UPCOMING}`:
      return {
        ...state,
        upcoming: payload.data.results
      };
    case `${types.GET_MOVIEDETAILS}`:
      return {
        ...state,
        movieDetails: payload.data
      };
    case `${types.GET_MOVIECAST}`:
      return {
        ...state,
        movieCast: payload.data.cast
      };
    case `${types.CLEAN_MOVIEDETAILS}`:
      return {
        ...state,
        movieDetails: payload
      };
    case `${types.CLEAN_MOVIECAST}`:
      return {
        ...state,
        movieCast: payload
      };
    default:
      return state;
  }
}
