import axios from 'axios';
import API_KEY from '../google_translate_api_key';

const ROOT_URL = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=en`;

export const FETCH_TRANSLATIONS = 'fetch_translations';
export const ADD_LANGUAGE = 'add_language';

export function fetchTranslations(word, languages) {
		// to do: iterate through languages array and 
		// issue one request per language
		const requests = Promise.all(languages.map(language => {
			return axios.post(`${ROOT_URL}&target=${language}&q=${word}`)
		})).then(function(values) {
			return values;
		});

	return {
		type: FETCH_TRANSLATIONS,
		payload: requests
	};
}

export function addlanguage(language) {
	return {
		type: ADD_LANGUAGE,
		payload: language
	}
}