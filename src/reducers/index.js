import { combineReducers } from 'redux';
import TranslationReducer from './reducer_translation';
import LanguagesReducer from './reducer_languages';
import AvailableLanguagesReducer from './reducer_available_languages';
import VoicesReducer from './reducer_voices';
import WordsReducer from './reducer_words';

const rootReducer = combineReducers({
  translations: TranslationReducer,
  selectedLanguages: LanguagesReducer,
  availableLanguages: AvailableLanguagesReducer,
  voices: VoicesReducer,
  words: WordsReducer
});

export default rootReducer;
