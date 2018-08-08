import { ADD_LANGUAGE } from '../actions';

export default function(state = ['es', 'fr', 'zh-CN'], action) {
	switch(action.type) {
	case ADD_LANGUAGE:
		return [action.payload, ...state];
	default: 
		return state;
	}
}