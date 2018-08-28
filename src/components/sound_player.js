import React, { Component } from 'react';

export default class SoundPlayer extends Component {
  handleButtonClick = event => {
    this.speaker = new SpeechSynthesisUtterance();
    this.selectedVoice = this.props.voice;
    this.speaker.text = this.props.text;
    // refactored with ES6 find helper function!
    this.speaker.voice = this.props.voices.find(voice => {
      return voice.name === this.selectedVoice;
    });
    speechSynthesis.speak(this.speaker);
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="ui positive basic button"
          onClick={this.handleButtonClick}
        >
          <i className="volume up icon" />
        </button>
      </div>
    );
  }
}
