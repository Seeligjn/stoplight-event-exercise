let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");

//event listeners for clicking, including logging the bulb on or off.
stopButton.addEventListener("click", function () {
  if (stopLight.classList.toggle("stop")) {
    console.log(`${this.textContent} bulb on.`);
  } else {
    console.log(`${this.textContent} bulb off.`);
  }
});

slowButton.addEventListener("click", function () {
  if (slowLight.classList.toggle("slow")) {
    console.log(`${this.textContent} bulb on.`);
  } else {
    console.log(`${this.textContent} bulb off.`);
  }
});

goButton.addEventListener("click", function () {
  if (goLight.classList.toggle("go")) {
    console.log(`${this.textContent} bulb on.`);
  } else {
    console.log(`${this.textContent} bulb off.`);
  }
});

//functions for mouse entering and leaving event listeners
function mouseEnter(event) {
  console.log(`Entered ${event.target.textContent} button.`);
}

function mouseleave(event) {
  console.log(`Left ${event.target.textContent} button.`);
}

///event listeners for entering/leaving
stopButton.addEventListener("mouseenter", mouseEnter);
slowButton.addEventListener("mouseenter", mouseEnter);
goButton.addEventListener("mouseenter", mouseEnter);

stopButton.addEventListener("mouseleave", mouseleave);
slowButton.addEventListener("mouseleave", mouseleave);
goButton.addEventListener("mouseleave", mouseleave);
