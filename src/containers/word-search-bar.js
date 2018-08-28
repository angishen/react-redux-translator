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
      <nav className="blue">
        <div className="nav-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search for a word or phrase to translate..."
                value={this.state.term}
                onChange={this.handleInputChange}
                required
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="search icon" />
            </div>
          </form>
        </div>
      </nav>
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
