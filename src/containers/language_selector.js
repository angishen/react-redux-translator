import $ from 'jquery';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import LANGUAGE_TRANSLATE_MAPPING from '../constants/language_translate_mapping';
import TRANSLATE_LANGUAGE_MAPPING from '../constants/translate_language_mapping';
import { welcomeBanner } from '../constants/initial_setup';

import { addLanguage } from '../actions';
import { fetchTranslation } from '../actions';

class LanguageSelector extends Component {

  constructor(props) {
    super(props);

    this.state = { selectedLanguage: '' };
  }

  renderDropdownOptions = lang => {
    let language = TRANSLATE_LANGUAGE_MAPPING[lang];
    return <option key={language} value={language}>{language}</option>;
  };

  handleChange = event => {
    this.setState({ selectedLanguage: event.target.value });
  };

  handleAddLanguage = event => {
    let langCode = LANGUAGE_TRANSLATE_MAPPING[this.state.selectedLanguage];
    this.props.addLanguage(langCode);
    this.props.fetchTranslation(
      this.props.words[this.props.words.length - 1] || welcomeBanner,
      langCode
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <select
          className="ui dropdown"
          name="language"
          onChange={this.handleChange}
          value={this.state.selectedLanguage}
        >
          <option key="" value="" selected>Add a language</option>
          {this.props.availableLanguages.sort().map(this.renderDropdownOptions)}
        </select>
        <button type="submit" onClick={this.handleAddLanguage}>
          submit
        </button>
      </div>
    );
  }
}

function mapStateToProps({ words, translations, availableLanguages }) {
  return { words, translations, availableLanguages };
}

export default connect(
  mapStateToProps,
  { addLanguage, fetchTranslation }
)(LanguageSelector);
