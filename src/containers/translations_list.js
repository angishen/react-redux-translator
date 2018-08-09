import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SoundPlayer from '../components/sound_player';

import TRANSLATE_LANGUAGE_MAPPING from '../translate_language_mapping';
import TRANSLATE_VOICE_MAPPING from '../translate_voice_mapping';

class TranslationsList extends Component {
	
	generateTranslationsList(translationResponse) {
		console.log(this.props.languages)
		const translatedWords = translationResponse.map(translation => {
			return translation.data.data.translations[0].translatedText
		});
		return _.zip(translatedWords, this.props.languages);
	}

	renderTranslations(data) {
		return (
			<tr key={data}>
				<td>{TRANSLATE_LANGUAGE_MAPPING[data[1]]}</td>
				<td>{data[0]}</td>
				<td><SoundPlayer text={data[0]} voice={TRANSLATE_VOICE_MAPPING[data[1]]} /></td>
			</tr>
		);
	}

	render() {
		return(
			<table className="table table-hover">
				<tbody>
					{this.generateTranslationsList(this.props.translations).map(this.renderTranslations)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ translations, languages }) {
	return { translations, languages };
}

export default connect(mapStateToProps)(TranslationsList);