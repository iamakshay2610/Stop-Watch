let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector("#display");
let int = null;

var start = document.getElementById('start-button');
start.addEventListener('click', function(){
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

var stopTimer = document.getElementById('stop-button');
stopTimer.addEventListener('click', function(){
    clearInterval(int);
});

var resetTimer = document.getElementById('reset-button');
resetTimer.addEventListener('click', function(){
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 0000 ";

});

function displayTimer(){
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}



function updateClock() {
    var currentTime = new Date();
   
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
   
    // Add leading zeros to ensure two-digit format
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
   
    var timeString = hours + ":" + minutes + ":" + seconds;
   
    // Update the HTML element with the current time
    document.getElementById("clock").innerHTML = timeString;
  }
  
  // Call updateClock function every second (1000 milliseconds)
  setInterval(updateClock, 1000);


