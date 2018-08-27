import {
  FETCH_TRANSLATIONS,
  FETCH_TRANSLATION,
  DELETE_LANGUAGE
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TRANSLATIONS:
      return action.payload;
    case FETCH_TRANSLATION:
      return [...state, action.payload];
    case DELETE_LANGUAGE:
      return state.filter(translation => {
        return translation.language !== action.payload;
      });
    default:
      return state;
  }
}
