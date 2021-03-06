import _ from 'lodash';
import axios from 'axios';
import {
  FETCH_TRANSLATION,
  FETCH_TRANSLATIONS,
  FETCH_VOICES,
  ADD_LANGUAGE,
  DELETE_LANGUAGE,
  SAVE_WORD
} from './types';
import API_KEY from '../google_translate_api_key';

const ROOT_URL = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=en`;

export function fetchTranslations(word, languages) {
  const translations = Promise.all(
    languages.map(language => {
      return axios.post(`${ROOT_URL}&target=${language}&q=${word}`);
    })
  ).then(values => {
    return _.zipWith(
      languages,
      values.map(value => {
        return value.data.data.translations[0].translatedText;
      }),
      (a, b) => {
        return { language: a, translatedText: b };
      }
    );
  });

  return {
    type: FETCH_TRANSLATIONS,
    payload: translations
  };
}

export function fetchTranslation(word, language) {
  const translation = axios
    .post(`${ROOT_URL}&target=${language}&q=${word}`)
    .then(value => {
      return {
        language,
        translatedText: value.data.data.translations[0].translatedText
      };
    });

  return {
    type: FETCH_TRANSLATION,
    payload: translation
  };
}

export function addLanguage(language) {
  return {
    type: ADD_LANGUAGE,
    payload: language
  };
}

export function deleteLanguage(language) {
  return {
    type: DELETE_LANGUAGE,
    payload: language
  };
}

export function saveWord(word) {
  return {
    type: SAVE_WORD,
    payload: word
  };
}

export function fetchVoices() {
  const awaitVoices = new Promise(
    done => (speechSynthesis.onvoiceschanged = done)
  );
  const voices = awaitVoices.then(() => {
    return speechSynthesis.getVoices();
  });

  return {
    type: FETCH_VOICES,
    payload: voices
  };
}
