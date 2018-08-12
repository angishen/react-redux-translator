import axios from 'axios';
import API_KEY from '../google_translate_api_key';

const ROOT_URL = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=en`;

export const FETCH_TRANSLATIONS = 'fetch_translations';
export const FETCH_TRANSLATION = 'fetch_tranlation';
export const ADD_LANGUAGE = 'add_language';
export const FETCH_VOICES = 'fetch_voices';
export const SAVE_WORD = 'save_word';
 
export function fetchTranslations(word, languages) {
	// to do: iterate through languages array and 
	// issue one request per language
	const requests = Promise.all(languages.map(language => {
		return axios.post(`${ROOT_URL}&target=${language}&q=${word}`)
	})).then(values => {
		return values;
	})

	return {
		type: FETCH_TRANSLATIONS,
		payload: requests
	};
}

export function fetchTranslation(word, language) {
	const request = axios.post(`${ROOT_URL}&target=${language}&q=${word}`)

	return {
		type: FETCH_TRANSLATION,
		payload: request
	};
}

export function addLanguage(language) {
	return {
		type: ADD_LANGUAGE,
		payload: language
	}
}

export function saveWord(word) {
	return {
		type: SAVE_WORD,
		payload: word
	}
}

export function fetchVoices() {
	const awaitVoices = new Promise(done => speechSynthesis.onvoiceschanged = done);
	const voices = awaitVoices.then(() => {
		return speechSynthesis.getVoices();
	})

	return {
		type: FETCH_VOICES,
		payload: voices
	};
}