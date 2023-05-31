function comment() {
  let comment = document.querySelector("#name1").value;
  let com = comment;
  let p = document.getElementById("demo");
  p.innerHTML = com;
}
var form = document.getElementById("formId");
function submitForm(event) {
  //Preventing page refresh
  event.preventDefault();
}
const button = document.getElementById("myButton");
let count = 0;

button.addEventListener("click", (event) => {
  count++;
  document.getElementById("emo").innerText = count;
});

//Calling a function during form submission.
form.addEventListener("submit", submitForm);
