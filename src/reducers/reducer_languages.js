import { ADD_LANGUAGE } from '../actions';
import { AR, CS, DA, DE, EL, ES, FI, FR, HI, HU, ID, IT, IW, JA, KO, NL, PL, PT, 
		RO, RU, SK, SV, TH, TR, ZH_CN, ZH_HK } from '../language_codes';

export default function(state = [ES, FR, ZH_CN], action) {
	switch(action.type) {
	case ADD_LANGUAGE:
		return [action.payload, ...state];
	default: 
		return state;
	}
}