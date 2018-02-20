function setTime() {
  var now = new Date()
  var hour = (now.getHours())
  var minute = now.getMinutes()
  var second = now.getSeconds()
  var hours = document.getElementById('hours')
  var minutes = document.getElementById('minutes')
  var seconds = document.getElementById('seconds')
  hourAngle = hour % 12 * 30 + minute / 2
  hours.style.transform = 'rotateZ(' + hourAngle + 'deg)';
  minutes.style.transform = 'rotateZ(' + minute * 6 + 'deg)';
  seconds.style.transform = 'rotateZ(' + second * 6 + 'deg)';
}
window.onload = function () {
  var lines = document.getElementsByClassName('line');
  var clock = document.getElementById('clock');
  var init = 1;
  var small = document.getElementById('small')
  var big = document.getElementById('big')
  for (var i = 0; i < lines.length; i++) {
    lines[i].style.transform = 'rotateZ(' + i * 6 + 'deg)';
  }
  clock.onmousedown = function (event) {
    var left = event.clientX - clock.offsetLeft;
    var top = event.clientY - clock.offsetTop;
    document.onmousemove = function (event) {
      var x = event.clientX;
      var y = event.clientY;
      clock.style.left = x - left + 'px';
      clock.style.top = y - top + 'px';
    }
  }
  clock.onmouseup = function (event) {
    document.onmousemove = null;
  }
  setTime()
  setInterval(setTime, 1000)
  small.onclick = function () {
    if (init >= 0.5) {
      init = parseFloat(init - 0.1)
      clock.style.transform = 'scale(' + init + ',' + init + ')';
    }
  }
  big.onclick = function () {
    init = parseFloat(init + 0.1)
    clock.style.transform = 'scale(' + init + ',' + init + ')';
  }
}