const modal = document.querySelector(".modal");
const talk = document.querySelector(".talk");
const close = document.querySelector(".close");
const send = document.querySelector(".send");

modal.style.display = "none";

close.onclick = function () {
  modal.style.display = "none";
};

send.onclick = function () {
  modal.style.display = "none";
};

talk.onclick = function () {
  modal.style.display = "block";
};
