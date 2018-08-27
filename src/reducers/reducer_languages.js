import { ADD_LANGUAGE } from "../actions/types";

export default function(state = ["es", "fr", "zh-CN", "el"], action) {
  switch (action.type) {
    case ADD_LANGUAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
