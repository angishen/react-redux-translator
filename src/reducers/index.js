import { combineReducers } from 'redux';
import TranslationReducer from './reducer_translation';
import LanguagesReducer from './reducer_languages';
import VoicesReducer from './reducer_voices';

const rootReducer = combineReducers({
	translations: TranslationReducer,
	languages: LanguagesReducer,
	voices: VoicesReducer
});

export default rootReducer;