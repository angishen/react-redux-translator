import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTranslations } from '../actions';
import { saveWord } from '../actions';

class WordSearchBar extends Component{
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	handleInputChange(event) {
		this.setState({term: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault();
		// call action creator to add search term to array of previously searched terms
		this.props.saveWord(this.state.term);
		// call action creator to make API request
		this.props.fetchTranslations(this.state.term, this.props.languages);
		// clear search input after search
		this.setState({ term: '' });
	}

	render() {
		return(
			<div className="search-bar-container">
				<form onSubmit={this.handleSubmit}>
					<div className="ui search">
						<div className="ui icon input search-bar">
							<input 
								type="text"
								placeholder="Search for a word or phrase"
								className = "prompt"
								value = {this.state.term}
								onChange = {this.handleInputChange}
							/>
							<i className="search icon"></i>
						</div>
					</div>
				
			</form>
			</div>

		);
	}
}

function mapStateToProps( { languages } ) {
	return { languages };
}

export default connect(mapStateToProps, { fetchTranslations, saveWord })(WordSearchBar);