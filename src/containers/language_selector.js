import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TRANSLATE_LANGUAGE_MAPPING from '../constants/translate_language_mapping';

export default class LanguageSelector extends Component {
	
	renderDropdownOptions(lang) {
		return(
			<option key={lang} value={lang}>{lang}</option>
		);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		// call add language action creator

	}

	render() {
		return (
			<form>
				<select name="languages">
					{_.map(TRANSLATE_LANGUAGE_MAPPING, this.renderDropdownOptions)}
				</select>
				<button 
					type="submit" 
					className="btn btn-primary"
					onSubmit={this.handleSubmit}>
					<span className="glyphicon glyphicon-plus-sign"></span>
				</button>
			</form>
		);
	}
}