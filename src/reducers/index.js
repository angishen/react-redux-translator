import { combineReducers } from 'redux';
import TranslationReducer from './reducer_translation';

const rootReducer = combineReducers({
	translations: TranslationReducer
});

export default rootReducer;