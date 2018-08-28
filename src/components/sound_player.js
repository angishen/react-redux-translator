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
      <a
        onClick={this.handleButtonClick}
        className="sound-player-button btn-floating waves-effect waves-light green"
      >
        <i className="material-icons">volume_up</i>
      </a>
    );
  }
}
