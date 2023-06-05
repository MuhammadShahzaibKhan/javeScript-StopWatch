var hour_txt = document.getElementById("hour-txt");
var min_txt = document.getElementById("min-txt");
var sec_txt = document.getElementById("sec-txt");
var msec_txt = document.getElementById("msec-txt");

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function renderValue() {
  hour_txt.innerHTML = hour;
  min_txt.innerHTML = min;
  sec_txt.innerHTML = sec;
  msec_txt.innerHTML = msec;
}

function timer() {
  msec++;
  renderValue();
  if (msec >= 100) {
    sec++;
    msec = 0;
    renderValue();
    if (sec >= 60) {
      min++;
      sec = 0;
      renderValue();
      if (min >= 60) {
        hour++;
        min = 0;
        renderValue();
      }
    }
  }
}

function startWatch() {
  interval = setInterval(timer, 10);
  startBtn = document.getElementById("startBtn").disabled = true;
}

function stopWatch() {
  clearInterval(interval);
  startBtn = document.getElementById("startBtn").disabled = false;
}

function resetWatch() {
  hour = 0;
  min = 0;
  sec = 0;
  msec = 0;
  renderValue();
  stopWatch();
}