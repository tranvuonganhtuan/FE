document.getElementsByTagName("button")[0].addEventListener("click", () => {
  document.getElementsByClassName("modal")[0].style.display = "block";
});

document.getElementsByClassName("modal")[0].addEventListener("click", () => {
  document.getElementsByClassName("modal")[0].style.display = "none";
});

document.getElementsByTagName("form")[0].addEventListener("click", e => {
  e.stopPropagation();
});
