import { put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../types/ActionTypes";

function* setLocation(action) {
  yield put({ type: 'SET_LOCATION' }, action.data)
}

export default function* root() {
  yield all([
    takeLatest(actionTypes.SET_LOCATION, setLocation)
  ]);
}
