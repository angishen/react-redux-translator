import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import SoundPlayer from "../components/sound_player";

import TRANSLATE_LANGUAGE_MAPPING from "../constants/translate_language_mapping";
import TRANSLATE_VOICE_MAPPING from "../constants/translate_voice_mapping";

import { fetchVoices, deleteLanguage } from "../actions";

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
      <tr key={translatedText}>
        <td>{TRANSLATE_LANGUAGE_MAPPING[language]}</td>
        <td>{translatedText}</td>
        <td>
          <SoundPlayer
            text={translatedText}
            voice={TRANSLATE_VOICE_MAPPING[language]}
            voices={voices}
          />
        </td>
        <td>
          <button onClick={this.handleDelete(language)} className="ui basic button red">
            <i className="trash icon" />
          </button>
        </td>
      </tr>
    );
  };

  renderWordBanner = word => {
    return (
      <div className="word-heading">
        <h1>{word}</h1>
        <SoundPlayer
          text={word}
          voice={TRANSLATE_VOICE_MAPPING["en"]}
          voices={this.props.voices}
        />
      </div>
    );
  };

  render() {
    if (this.props.translations.length > 0) {
      return (
        <div className="table">
          <React.Fragment>
            {this.renderWordBanner(
              this.props.words[this.props.words.length - 1]
            )}
          </React.Fragment>
          <table className="ui celled table">
            <tbody>
              {this.props.translations.map(this.renderTranslations)}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

function mapStateToProps({ translations, languages, voices, words }) {
  return { translations, languages, voices, words };
}

export default connect(
  mapStateToProps,
  { fetchVoices, deleteLanguage }
)(TranslationsList);
