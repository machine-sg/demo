const startBtn = document.getElementById('start');
//const overBtn = document.getElementById('over');
const resultBtn = document.getElementById('result');
var startDate = new Date("Feb 11, 2021 12:05:00").getTime(); ;
var startTime = document.getElementById('starttime');
var endTime = document.getElementById('endtime'); 

var time = new Date().getTime();
var t = startDate - time ;
if(time <= startDate)
    startBtn.classList.remove('hide');
resultBtn.classList.add('hide');
if(t < 0){
    startBtn.classList.add('hide');
    resultBtn.classList.remove('hide');
}
