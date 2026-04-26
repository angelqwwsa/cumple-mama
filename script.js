let screen = document.getElementById("screen");

function press(v) {
  screen.value += v;
}

function calc() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}

function clearAll() {
  screen.value = "";
}

let buttons = [
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  "0",".","=","+"
];

let html = "";

buttons.forEach(b => {
  if (b === "=") {
    html += `<button onclick="calc()">=</button>`;
  } else {
    html += `<button onclick="press('${b}')">${b}</button>`;
  }
});

html += `<button onclick="clearAll()" style="grid-column: span 4;">C</button>`;

document.getElementById("buttons").innerHTML = html;

document.addEventListener("keydown", e => {
  if (!isNaN(e.key) || "+-*/().".includes(e.key)) press(e.key);
  if (e.key === "Enter") calc();
});
