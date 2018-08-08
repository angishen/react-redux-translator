import React, { Component } from 'react';
import { connect } from 'react-redux';


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

function mapStateToProps({ translations }) {
	return { translations };
}

export default connect(mapStateToProps)(TranslationsList);