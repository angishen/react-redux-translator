import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SoundPlayer from '../components/sound_player';

import TRANSLATE_LANGUAGE_MAPPING from '../constants/translate_language_mapping';
import TRANSLATE_VOICE_MAPPING from '../constants/translate_voice_mapping';

import { fetchVoices } from '../actions';

class TranslationsList extends Component {
	componentDidMount() {
		this.props.fetchVoices();
	}

	generateTranslationsList(translationResponse) {
		const translatedWords = translationResponse.map(translation => {
			return translation.data.data.translations[0].translatedText
		});
		return _.zip(translatedWords, this.props.languages);
	}

	renderTranslations = (data) => {
		let voices = this.props.voices;
		return (
			<tr key={data}>
				<td>{TRANSLATE_LANGUAGE_MAPPING[data[1]]}</td>
				<td>{data[0]}</td>
				<td><SoundPlayer 
					text={data[0]} 
					voice={TRANSLATE_VOICE_MAPPING[data[1]]}
					voices={voices}
				/>
				</td>
			</tr>
		);
	}

	render() {
		if (this.props.translations.length > 0) {
			return(
			<table className="table table-hover">
				<tbody>
					{this.generateTranslationsList(this.props.translations).map(this.renderTranslations)}
				</tbody>
			</table>
			);
		} else {
			return <div></div>
		}
	}
}

function mapStateToProps({ translations, languages, voices }) {
	return { translations, languages, voices };
}

export default connect(mapStateToProps, { fetchVoices })(TranslationsList);