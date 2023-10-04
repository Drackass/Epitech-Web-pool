document.addEventListener("DOMContentLoaded", function () {
    var increaseButton = document.querySelector("button:nth-of-type(1)");
    var decreaseButton = document.querySelector("button:nth-of-type(2)");
    var backgroundColorSelect = document.querySelector("select");
  
    increaseButton.addEventListener("click", function () {
      changeFontSize(2); 
    });
  
    decreaseButton.addEventListener("click", function () {
      changeFontSize(-2); 
    });
  
    function changeFontSize(change) {
      var body = document.body;
      var currentSize = window.getComputedStyle(body, null).getPropertyValue("font-size");
      var newSize = parseFloat(currentSize) + change + "px";
      body.style.fontSize = newSize;
    }
  
    backgroundColorSelect.addEventListener("change", function () {
      var selectedColor = backgroundColorSelect.value;
      document.body.style.backgroundColor = selectedColor;
    });
  });
  