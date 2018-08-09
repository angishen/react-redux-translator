import React, { Component } from 'react';
import { connect } from 'react-redux';

import SoundPlayer from '../components/sound_player';

class TranslationsList extends Component {
	
	generateTranslationsList(translationResponse) {
		const translatedWords = translationResponse.map(translation => {
			return translation.data.data.translations[0].translatedText
		});
		return translatedWords;
	}

	renderTranslations(translation) {
		return (
			<tr key={translation}>
				<td>{translation}</td>
				<td><SoundPlayer text={translation}/></td>
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