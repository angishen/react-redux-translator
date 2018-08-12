import { FETCH_TRANSLATIONS } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
	case FETCH_TRANSLATIONS:
		return [...state, action.payload[1]]
	default: 
		return state;
	}
}