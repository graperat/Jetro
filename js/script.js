var link = document.querySelector(".btn--description-col");
var popup = document.querySelector(".popup");
var close = document.querySelector(".close-popup");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("popup-show");

 });
close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("popup-show");

 });