import React, { Component } from 'react';
import { connect } from 'react-redux';

import SoundPlayer from '../components/sound_player';

import TRANSLATE_LANGUAGE_MAPPING from '../constants/translate_language_mapping';
import TRANSLATE_VOICE_MAPPING from '../constants/translate_voice_mapping';
import {welcomeBanner} from '../constants/initial_setup';

import { fetchVoices, deleteLanguage, fetchTranslations } from '../actions';



class TranslationsList extends Component {
  componentDidMount() {
    this.props.fetchVoices();
  }

  handleDelete = language => event => {
    this.props.deleteLanguage(language);
  };

  renderTranslations = ({ language, translatedText }) => {
    let voices = this.props.voices;
    return (
      <div className="ui raised centered card translation-card" key={language}>
        <div className="content">
          <div className="header">{translatedText}</div>
          <div className="description">
            <p>{TRANSLATE_LANGUAGE_MAPPING[language]}</p>
          </div>
        </div>
        <div className="extra content">
          <SoundPlayer
            text={translatedText}
            voice={TRANSLATE_VOICE_MAPPING[language]}
            voices={voices}
          />
          <button
            onClick={this.handleDelete(language)}
            className="circular ui icon button red right floated"
          >
            <i className="icon trash" />
          </button>
        </div>
      </div>
    );
  };

  renderWordBanner = word => {
    return (
      <div className="word-heading">
        <span>
          <h1 className="english-word">{word}</h1>
          <SoundPlayer
            text={word}
            voice={TRANSLATE_VOICE_MAPPING['en']}
            voices={this.props.voices}
          />
        </span>
      </div>
    );
  };

  render() {
    return (
      <div>
        <React.Fragment>
          {this.renderWordBanner(
            this.props.words[this.props.words.length - 1] || welcomeBanner
          )}
        </React.Fragment>
        <div className="ui container translation-list">
          {this.props.translations.map(this.renderTranslations)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ translations, selectedLanguages, voices, words }) {
  return { translations, selectedLanguages, voices, words };
}

export default connect(
  mapStateToProps,
  { fetchVoices, fetchTranslations, deleteLanguage }
)(TranslationsList);
