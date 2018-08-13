import React, { Component } from 'react';

export default class SoundPlayer extends Component {

	handleButtonClick = (event) => {
		this.speaker = new SpeechSynthesisUtterance();
		this.selectedVoice = this.props.voice;
		this.speaker.text = this.props.text;
		this.voices = this.props.voices;
		this.voices.forEach(voice => {
			if (voice.name === this.selectedVoice) {
				this.speaker.voice = voice;
			}
		});
		speechSynthesis.speak(this.speaker);

	}

	render() {
		return(
			<div>
				<button 
					type="button" 
					className="ui positive basic button"
					onClick={this.handleButtonClick}>
					<i className="volume up icon"></i>
				</button>
			</div>
		);

	}
}
