window.onload = function () {
  var input = document.getElementById("inputBox");
  var container = document.getElementById("container");
  container.addEventListener("click", function(e) {
    buttonClick(e.target.id);
  });

  //button =
  var calc = document.getElementById("button=");
  calc.addEventListener("click", calculate);

  //button c
  var c = document.getElementById("buttonc");
  c.addEventListener("click", erase);

  function buttonClick(buttonId) {
    if ((buttonId != "buttonc") && (buttonId != "button=")) {
      var s = buttonId;
      s = s.replace("button", "");
      entries(s);
    }
  }

  //displays the value of the clicked button
  function entries(s) {
    input.value += s;
  }

  //functions calculate() and erase() for buttons = and C
  function calculate() {
    if (input.value == ".") {
      alert("Please enter a mathematical expression");
      return;
    }
    input.value = eval(input.value);
  }

  function erase() {
    input.value = '';
  }
}