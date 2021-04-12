import * as ActionTypes from "../types/ActionTypes";

export const defaultState = {
  coordinates: {
    lat: -1.2884,
    lng: 36.8233
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOCATION: {
      return {
        ...state,
        coordinates: action.data
      };
    }

    default: {
      return state;
    }
  }
};
