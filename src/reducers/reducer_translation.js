import { FETCH_TRANSLATIONS } from '../actions';
import { FETCH_TRANSLATION } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
	case FETCH_TRANSLATIONS:
		console.log(action.payload);
		return action.payload;
	case FETCH_TRANSLATION:
		return [...state, action.payload];
	default: 
		return state;
	}
		
}