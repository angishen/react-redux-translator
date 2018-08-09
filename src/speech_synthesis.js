const SpeechSynthesis = function(props) {
	this.utterance = new window.SpeechSynthesisUtterance();
	this.selectedVoice = SpeechSynthesis.getVoice(props.voice);
	this.utterance.voice = this.selectedVoice[0];
	this.utterance.text = props.text;
}

SpeechSynthesis.supported =function(selectedVoice) {
	return window.SpeechSynthesis;
}

SpeechSynthesis.getVoice = function(selectedVoice) {
	return window.SpeechSynthesis.getVoices().filter(voice => {
		return voice.name === selectedVoice;
	});
}

module.exports = SpeechSynthesis;