document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});
