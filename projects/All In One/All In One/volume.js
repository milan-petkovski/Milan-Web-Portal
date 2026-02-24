let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let mediaElements = document.querySelectorAll("video, audio");

mediaElements.forEach((media) => {
  if (!media.hasAttribute("data-boosted")) {
    let source = audioCtx.createMediaElementSource(media);
    let gainNode = audioCtx.createGain();
    gainNode.gain.value = 2.0; 
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    media.setAttribute("data-boosted", "true");
  }
});