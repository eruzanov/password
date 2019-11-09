import generator from "password-generator";
import "./styles.css";

const input = document.querySelector("input");

function copy() {
  input.select();
  input.setSelectionRange(0, 99999); //For mobile devices
  document.execCommand("copy");
  input.blur();
}

function generate() {
  input.value = generator(12, false);
}

generate();
document.querySelector(".generate").addEventListener("click", generate);
document.querySelector(".copy").addEventListener("click", copy);
