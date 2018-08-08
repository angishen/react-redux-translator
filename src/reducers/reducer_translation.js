import { FETCH_TRANSLATIONS } from '../actions'

export default function(state = [], action ) {
	switch(action.type) {
	case FETCH_TRANSLATIONS:
		return [action.payload.data];
	default: 
		return state;
	}
		
}