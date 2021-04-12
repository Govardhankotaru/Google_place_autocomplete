import coordinatesReducer from "./coordinatesReducer";

import { combineReducers } from "redux";

export default combineReducers({
  coordinates: coordinatesReducer
})