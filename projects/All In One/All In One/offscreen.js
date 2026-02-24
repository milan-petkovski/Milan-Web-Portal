const streamUrl = "https://radioinnis-naxinacional.streaming.rs:8622/;stream.nsv";
const audio = new Audio();

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "play") {
    audio.src = streamUrl;
    audio.volume = request.volume !== undefined ? request.volume / 100 : 0.12; 
    audio.play();

    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Radio IN',
        artist: 'Pokrece All In One ekstenzija'
      });
    }
  } else if (request.action === "pause") {
    audio.pause();
    audio.src = "";
    audio.volume = 0.12;
  } else if (request.action === "setVolume") {
    audio.volume = request.value / 100;
  }
});