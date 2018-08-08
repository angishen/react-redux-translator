import { combineReducers } from 'redux';
import TranslationReducer from './reducer_translation';
import LanguagesReducer from './reducer_languages';

const rootReducer = combineReducers({
	translations: TranslationReducer,
	languages: LanguagesReducer
});

export default rootReducer;