document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".results__col");

  function stopAllVideos() {
    document.querySelectorAll(".results__video").forEach((videoBox) => {
      const parent = videoBox.closest(".results__col");
      videoBox.remove();
      if (parent) parent.classList.remove("is-playing");
    });
  }

  cards.forEach((card) => {
    const playBtn = card.querySelector(".results__images");
    const videoUrl = card.dataset.video;  

    if (!playBtn || !videoUrl) return;

    playBtn.addEventListener("click", function (e) {
      e.stopPropagation();

      stopAllVideos();

      if (card.classList.contains("is-playing")) {
        card.classList.remove("is-playing");
        return;
      }

      card.classList.add("is-playing");

      const videoWrapper = document.createElement("div");
      videoWrapper.className = "results__video";

      const src = `${videoUrl}?autoplay=1&rel=0`;

      videoWrapper.innerHTML = `
        <iframe 
          src="${src}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      `;

      card.appendChild(videoWrapper);
    });
  });
});
