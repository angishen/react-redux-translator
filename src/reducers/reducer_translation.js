import { FETCH_TRANSLATIONS, FETCH_TRANSLATION } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TRANSLATIONS:
      return action.payload;
    case FETCH_TRANSLATION:
      return [...state, action.payload];
    default:
      return state;
  }
}
