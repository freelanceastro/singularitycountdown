$.backstretch("img/Ray_site_background_V1.jpg");

var singularity_string = 'August 17 2031 00:00:00 GMT-05:00';

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor((t / (1000 * 60 * 60 * 24)) % 365);
  var years = Math.floor(t / (1000 * 60 * 60 * 24 * 365));
  return {
    'total': t,
    'years': years,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var yearsSpan = clock.querySelector('.years');
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    yearsSpan.innerHTML = t.years;
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var endtime = new Date(Date.parse(singularity_string));
initializeClock('clockdiv', endtime);

$(".btn").click(posthuman_alert);
function posthuman_alert(){
  // alert("Thank you for your interest. Our collective posthuman intelligence will retrocausally record your response after the Singularity occurs, and has already added you to our mailing list!");
  $("body").append("<div class = 'alert-overlay'></div>");
  // $(".alert-overlay").append("<div class = 'alert-box'></div>");
  $("body").append("<div class = 'alert-box'></div>");
  $(".alert-box").append("<p>Thank you for your interest. <br> Our collective posthuman intelligence will retrocausally record your response after the Singularity occurs, and has already added you to our mailing list!</p>");
  $(".alert-overlay").click(dismiss_posthuman_alert);
}

function dismiss_posthuman_alert(){
  $(".alert-overlay").remove()
  $(".alert-box").remove()
}