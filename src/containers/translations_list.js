import React, { Component } from 'react';
import { connect } from 'react-redux';


class TranslationsList extends Component {
	renderTranslation(translationResponse) {
		const translation = translationResponse.data.translations[0].translatedText;

		return (
			<tr>
				<td>{translation}</td>
			</tr>
		)
	}

	render() {
		return(
			<table className="table table-hover">
				<tbody>
					{this.props.translations.map((this.renderTranslation))}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ translations }) {
	return { translations };
}

export default connect(mapStateToProps)(TranslationsList);