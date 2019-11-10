import generator from "password-generator";
import "./styles.css";

const form = document.querySelector("form");

function copy() {
  form.password.select();
  form.password.setSelectionRange(0, 99999); //For mobile devices
  document.execCommand("copy");
  form.password.blur();
}

function generate() {
  const checkboxes = [];
  if (form.digit.checked) checkboxes.push("\\d");
  if (form.alphanumeric.checked) checkboxes.push("\\w");
  if (form.nonWord.checked) checkboxes.push("\\W");
  const pattern = checkboxes.length
    ? new RegExp("[" + checkboxes.join("") + "]")
    : null;
  form.password.value = generator(12, false, pattern);
}

form.generate.addEventListener("click", generate);
form.copy.addEventListener("click", copy);
form.digit.addEventListener("change", generate);
form.alphanumeric.addEventListener("change", generate);
form.nonWord.addEventListener("change", generate);

form.digit.checked = true;
form.alphanumeric.checked = true;
form.nonWord.checked = true;

generate();
