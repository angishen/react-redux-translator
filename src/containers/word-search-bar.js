import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTranslations } from '../actions';

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

		// call action creator to make API request
		this.props.fetchTranslations(this.state.term);
		// clear search input after search
		this.setState({ term: '' });
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit} className="input-group">
				<input 
					type="text"
					placeholder="Search for a word"
					className = "form-control"
					value = {this.state.term}
					onChange = {this.handleInputChange}
				/>
			</form>

		);
	}
}

export default connect(null, { fetchTranslations })(WordSearchBar);