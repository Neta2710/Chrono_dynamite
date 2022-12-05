const audio = new Audio("../asset/musique/click.mp3");
const C = {
  hr: { val: 0, DOM: document.getElementById("hr") },
  min: { val: 0, DOM: document.getElementById("min") },
  sec: { val: 0, DOM: document.getElementById("sec") },
};
x = null;


document.getElementById("start").addEventListener("click", start);
function start() {
  document.getElementById("start").disabled = "disabled";
  document.getElementById("start").style.textDecoration = "line-through";
  audio.play();
  document.getElementById("start").style.transform = "translateY(3px)";
  setInterval(function () {
    document.getElementById("start").style.transform = "translateY(0px)";
  }, 300);
  x = setInterval(function () {
    
    document.getElementById("start").style.color = "red";

    C.sec.val++;
    C.sec.val < 10
      ? (C.sec.DOM.innerHTML = "0" + C.sec.val)
      : (C.sec.DOM.innerHTML = C.sec.val);

    if (C.sec.val == 59) {
      C.min.val++;
      C.sec.val = 00;
    }
    C.min.val < 10
      ? (C.min.DOM.innerHTML = "0" + C.min.val)
      : (C.min.DOM.innerHTML = C.min.val);

    if (C.min.val == 59) {
      C.hr.val++;
      C.min.val = 00;
    }
    C.hr.val < 10
      ? (C.hr.DOM.innerHTML = "0" + C.hr.val)
      : (C.hr.DOM.innerHTML = C.hr.val);
  }, 100);
}


document.getElementById("stop").addEventListener("click", stop);
function stop() {
  document.getElementById("start").disabled = "";
  document.getElementById("start").style.textDecoration = "";
  document.getElementById("start").style.color = "green";
  audio.play();
  // annimation css avec delay
  document.getElementById("stop").style.transform = "translateY(3px)";
  setInterval(function () {
    document.getElementById("stop").style.transform = "translateY(0px)";
  }, 300);
  clearInterval(x);
}


document.getElementById("reset").addEventListener("click", reset);
function reset() {
  audio.play();
  // annimation css avec delay
  document.getElementById("reset").style.transform = "translateY(3px)";
  setInterval(function () {
    document.getElementById("reset").style.transform = "translateY(0px)";
  }, 300);
  C.sec.val = 0;
  C.min.val = 0;
  C.hr.val = 0;
  C.sec.DOM.innerHTML = "0" + C.sec.val;
  C.min.DOM.innerHTML = "0" + C.min.val;
  C.hr.DOM.innerHTML = "0" + C.hr.val;
}


