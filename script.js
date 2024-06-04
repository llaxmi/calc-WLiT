const output = document.getElementById("output-screen");
function display(num) {
  output.value += num;
}
function calculate() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    alert(error.message);
  }
}
function Clear() {
  output.value = "";
}

function del() {
  output.value = output.value.slice(0, -1);
}

function plus_minus() {
  output.value = output.value * -1;
}
