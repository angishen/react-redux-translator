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

  handleDelete = event => {
    this.props.deleteLanguage();
  };

  generateTranslationsList(translationResponse) {
    const translatedWords = translationResponse.map(translation => {
      return translation.data.data.translations[0].translatedText;
    });
    return _.zip(translatedWords, this.props.languages);
  }

  renderTranslations = data => {
    let voices = this.props.voices;
    return (
      <tr key={data}>
        <td>{TRANSLATE_LANGUAGE_MAPPING[data[1]]}</td>
        <td>{data[0]}</td>
        <td>
          <SoundPlayer
            text={data[0]}
            voice={TRANSLATE_VOICE_MAPPING[data[1]]}
            voices={voices}
          />
        </td>
        <td>
          <button className="ui basic button red">
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
              {this.generateTranslationsList(this.props.translations).map(
                this.renderTranslations
              )}
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
