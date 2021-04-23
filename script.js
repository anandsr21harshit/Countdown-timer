daysEle = document.getElementById("days");
hoursEle = document.getElementById("hours");
minutesEle = document.getElementById("minutes");
secondsEle = document.getElementById("seconds");



var newYear = new Date(2022,0,1,0,0,0);

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

function countdown(){
    var newYearDate = newYear;
    var currentDate = new Date();

    var totalSeconds = (newYearDate-currentDate)/1000;

    var days = Math.ceil(totalSeconds/(3600*24));

    var hours = Math.ceil(totalSeconds/3600)%24;
    var minutes = Math.ceil(totalSeconds/60)%60;
    var seconds = Math.ceil(totalSeconds)%60;

    daysEle.innerHTML = days;
    hoursEle.innerHTML = formatTime(hours);
    minutesEle.innerHTML = formatTime(minutes);
    secondsEle.innerHTML = formatTime(seconds);
    
}

countdown();
setInterval(countdown,1000);
