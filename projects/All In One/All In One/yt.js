chrome.storage.local.get(["ytToggle"], (data) => {
  if (data.ytToggle) {
    function ucitajDislike() {
      let url = new URL(window.location.href);
      let videoId = url.searchParams.get("v");
      if (!videoId) return;

      fetch("https://returnyoutubedislikeapi.com/votes?videoId=" + videoId)
        .then(res => res.json())
        .then(podaci => {
          let dugmici = document.querySelectorAll("button");
          dugmici.forEach(dugme => {
            if (dugme.getAttribute("aria-label") && dugme.getAttribute("aria-label").toLowerCase().includes("dislike")) {
              let tekst = dugme.querySelector(".yt-core-attributed-string") || dugme;
              tekst.textContent = podaci.dislikes;
            }
          });
        });
    }
    
    ucitajDislike();
    document.addEventListener("yt-navigate-finish", ucitajDislike);
  }
});