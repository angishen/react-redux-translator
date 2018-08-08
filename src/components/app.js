import React, { Component } from 'react';
import WordSearchBar from '../containers/word-search-bar';
import TranslationsList from '../containers/translations_list';

export default class App extends Component {
	render() {
		return(
			<div>
				<h3>Welcome to the Translator App!</h3>
				<WordSearchBar/>
				<TranslationsList />
			</div>
		);
	}
}