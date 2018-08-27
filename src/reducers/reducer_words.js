import { SAVE_WORD } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}
