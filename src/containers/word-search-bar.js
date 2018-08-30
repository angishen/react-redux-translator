import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTranslations } from '../actions';
import { saveWord } from '../actions';

class WordSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // call action creator to add search term to array of previously searched terms
    this.props.saveWord(this.state.term);
    // call action creator to make API request
    this.props.fetchTranslations(this.state.term, this.props.selectedLanguages);
    // clear search input after search
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="ui container search-bar">
        <form onSubmit={this.handleSubmit}>
          <div className="ui fluid search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search for a word or phrase to translate..."
                value={this.state.term}
                onChange={this.handleInputChange}
              />
              <i className="icon search" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ selectedLanguages }) {
  return { selectedLanguages };
}

export default connect(
  mapStateToProps,
  { fetchTranslations, saveWord }
)(WordSearchBar);
