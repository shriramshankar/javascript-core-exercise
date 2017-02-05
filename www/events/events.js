// In the index.html file there are several elements containing the
// text "Click Me".  Those elements are followed by another element
// containing the number zero, which we'll call the "counter".
//
// Inside the anonymous function below, write the necessary code so
// that clicking any "Click Me" element will increment its paired
// counter.
//
// BONUS 1: Create a new element on the page that displays the sum of
// all other counters.
//
// BONUS 2: When the global counter goes above 10 add the "goal" class
// to it.  Doing so should make it turn red.
(function() {
var newCounterElement = document.createElement("div");
newCounterElement.textContent = 0;
 document.lastChild.appendChild(newCounterElement);
 document.body.addEventListener("click", function function_name(event) {
    if(event.target.textContent === 'Click Me') {
      var num = parseInt(event.target.nextElementSibling.textContent) + 1
      event.target.nextElementSibling.textContent = num;
      newCounterElement.textContent = parseInt(newCounterElement.textContent) + 1;
    }
    if(parseInt(newCounterElement.textContent) > 10) {
      newCounterElement.classList.add("goal");
    }
    event.preventDefault();
 })


  // Your code here.

})();
