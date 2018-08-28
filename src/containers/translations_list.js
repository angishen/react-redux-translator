import React, { Component } from 'react';
import { connect } from 'react-redux';

import SoundPlayer from '../components/sound_player';

import TRANSLATE_LANGUAGE_MAPPING from '../constants/translate_language_mapping';
import TRANSLATE_VOICE_MAPPING from '../constants/translate_voice_mapping';

import { fetchVoices, deleteLanguage } from '../actions';

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
      <div className="card blue darken-1" key={language}>
        <div className="card-content white-text">
          <span className="card-title">{translatedText}</span>
          <p>{TRANSLATE_LANGUAGE_MAPPING[language]}</p>
          <div className="icon-row row">
            <div className="col s1">
              <SoundPlayer
                text={translatedText}
                voice={TRANSLATE_VOICE_MAPPING[language]}
                voices={voices}
              />
            </div>
            <div className="col s10" />
            <div className="col s1">
              <a
                onClick={this.handleDelete(language)}
                className="btn-floating waves-effect waves-light red right"
              >
                <i className="material-icons">delete</i>
              </a>
            </div>
          </div>
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
    if (this.props.translations.length > 0) {
      return (
        <div className="container">
          <React.Fragment>
            {this.renderWordBanner(
              this.props.words[this.props.words.length - 1]
            )}
          </React.Fragment>
          <div>{this.props.translations.map(this.renderTranslations)}</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

function mapStateToProps({ translations, voices, words }) {
  return { translations, voices, words };
}

export default connect(
  mapStateToProps,
  { fetchVoices, deleteLanguage }
)(TranslationsList);
