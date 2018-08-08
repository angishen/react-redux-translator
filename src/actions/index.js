import axios from 'axios';
import API_KEY from '../google_translate_api_key';

const ROOT_URL = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=en`;

export const FETCH_TRANSLATIONS = 'fetch_translations';

export function fetchTranslations(word) {
	const url = `${ROOT_URL}&target=zh-CN&q=${word}`;
	const request = axios.post(url);

	return {
		type: FETCH_TRANSLATIONS,
		payload: request
	};
}