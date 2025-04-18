document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});

const video = document.querySelector(".hero-video");
video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.play();
});
