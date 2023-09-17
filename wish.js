var textToSpeechMessage = "Happy 12 Rabi ul Awal, " + a;

// Text-to-speech
var speechSynthesis = window.speechSynthesis;
var speechMessage = new SpeechSynthesisUtterance(textToSpeechMessage);
speechSynthesis.speak(speechMessage);

// Background music
var backgroundMusic = new Audio('YOUR_BACKGROUND_MUSIC_URL_HERE'); // Replace with your music URL
backgroundMusic.loop = true; // Loop the music
backgroundMusic.play(); // Play the music
