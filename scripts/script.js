document.querySelectorAll("header nav ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll("header nav ul li")
      .forEach((li) => li.classList.remove("active"));
    this.parentElement.classList.add("active");
  });
});
