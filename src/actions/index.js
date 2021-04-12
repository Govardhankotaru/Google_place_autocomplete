import * as ActionTypes from "../types/ActionTypes";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const setLocation = data =>
  action(ActionTypes.SET_LOCATION, { data });
