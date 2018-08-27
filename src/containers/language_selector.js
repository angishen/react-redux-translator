import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import TRANSLATE_LANGUAGE_MAPPING from "../constants/translate_language_mapping";
import LANGUAGE_TRANSLATE_MAPPING from "../constants/language_translate_mapping";

import { addLanguage } from "../actions";
import { fetchTranslation } from "../actions";

class LanguageSelector extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedLanguage: "" };
  }

  renderDropdownOptions = lang => {
    return <option key={lang}>{lang}</option>;
  };

  handleChange = event => {
    this.setState({ selectedLanguage: event.target.value });
  };

  handleAddLanguage = event => {
    let langCode = LANGUAGE_TRANSLATE_MAPPING[this.state.selectedLanguage];
    this.props.addLanguage(langCode);
    this.props.fetchTranslation(
      this.props.words[this.props.words.length - 1],
      langCode
    );
    event.preventDefault();
  };

  render() {
    if (this.props.translations.length > 0) {
      return (
        <form>
          <select
            name="language"
            onChange={this.handleChange}
            value={this.state.selectedLanguage}
            className="ui selection dropdown"
          >
            {_.map(TRANSLATE_LANGUAGE_MAPPING, this.renderDropdownOptions)}
          </select>
          <button
            type="submit"
            className="ui primary button"
            onClick={this.handleAddLanguage}
          >
            <i className="plus circle icon" />
          </button>
        </form>
      );
    }
    return <div />;
  }
}

function mapStateToProps({ words, translations }) {
  return { words, translations };
}

export default connect(
  mapStateToProps,
  { addLanguage, fetchTranslation }
)(LanguageSelector);
