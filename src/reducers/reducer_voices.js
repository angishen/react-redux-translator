import { FETCH_VOICES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_VOICES:
      return action.payload;
    default:
      return state;
  }
}
