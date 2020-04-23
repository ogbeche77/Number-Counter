var counting = document.querySelector(".counter");
var plusCount = document.querySelector("#addCountBtn");
var minusCount = document.querySelector("#lowerCountBtn");

var MrCount = 0;

plusCount.addEventListener("click", increaseCounter);
minusCount.addEventListener("click", decreaseCounter);

function increaseCounter() {
  MrCount++;
  counting.innerHTML = MrCount;
  if (counting.innerHTML > "0") {
    counting.style.color = "rgb(71, 29, 29)";
  } else if (counting.innerHTML === "0") {
    counting.style.color = "grey";
  }
  counting.animate([{ opacity: "0.5" }, { opacity: "1.0" }], {
    duration: 700,
    fill: "forwards",
  });
}

function decreaseCounter() {
  MrCount--;
  counting.innerHTML = MrCount;
  if (counting.innerHTML < "0") {
    counting.style.color = "red";
  } else if (counting.innerHTML === "0") {
    counting.style.color = "white";
  }
  counting.animate([{ opacity: "0.5" }, { opacity: "1.0" }], {
    duration: 700,
    fill: "forwards",
  });
}
