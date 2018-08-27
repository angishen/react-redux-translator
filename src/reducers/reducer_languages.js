import { ADD_LANGUAGE, DELETE_LANGUAGE } from "../actions/types";

export default function(state = ["es", "fr", "zh-CN", "el"], action) {
  switch (action.type) {
    case ADD_LANGUAGE:
      return [...state, action.payload];
    case DELETE_LANGUAGE:
      return state.filter(lang => {return lang !== action.payload});
    default:
      return state;
  }
}
