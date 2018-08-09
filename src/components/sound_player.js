import React, { Component } from 'react';

export default class SoundPlayer extends Component {

	handleButtonClick = (event) => {
		this.speaker = new SpeechSynthesisUtterance();
		this.selectedVoice = this.props.voice;
		this.speaker.text = this.props.text;
		this.voices = speechSynthesis.getVoices();
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
					className="btn btn-success"
					onClick={this.handleButtonClick}>
					<span className="glyphicon glyphicon-volume-up"></span>
				</button>
			</div>
		);

	}
}