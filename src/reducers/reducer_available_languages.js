import { ADD_LANGUAGE, DELETE_LANGUAGE } from '../actions/types';

export default function(
  state = [
    'ar',
    'zh-HK',
    'cs',
    'da',
    'nl',
    'fi',
    'de',
    'iw',
    'hi',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'pl',
    'pt',
    'ro',
    'ru',
    'sk',
    'sv',
    'th',
    'tr'
  ],
  action
) {
  switch (action.type) {
    case DELETE_LANGUAGE:
      return [...state, action.payload];
    case ADD_LANGUAGE:
      return state.filter(lang => {
        return lang !== action.payload;
      });
    default:
      return state;
  }
}
