const $ = document;
const miliseconds = $.getElementById("miliseconds");
const seconds = $.getElementById("seconds");
const minutes = $.getElementById("minutes");
const hours = $.getElementById("hours");

const start = $.getElementById("start");
const stop = $.getElementById("stop");
const reset = $.getElementById("reset");

let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let interval = null;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function setStart() {
  ms++;
  if (ms >= 100) {
    s++;
    ms = 0;
  }
  if (s >= 60) {
    m++;
    s = 0;
  }
  if (m >= 60) {
    h++;
    m = 0;
  }

  if (h >= 24) {
    h = 0;
  }

  miliseconds.innerHTML = formatTime(ms);
  seconds.innerHTML = formatTime(s);
  minutes.innerHTML = formatTime(m);
  hours.innerHTML = formatTime(h);
}

start.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(setStart, 10);
    start.disabled = true;
  }
});

stop.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    start.disabled = false;
  }
});

reset.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
  start.disabled = false;
  ms = 0;
  s = 0;
  m = 0;
  h = 0;
  miliseconds.innerHTML = "00";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
});
