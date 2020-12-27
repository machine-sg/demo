const startBtn = document.getElementById('start');
//const overBtn = document.getElementById('over');
const resultBtn = document.getElementById('result');
var startDate = new Date("Dec 25, 2020 22:37:25").getTime(); 

var time = new Date().getTime();
var t = startDate - time ;
startBtn.classList.remove('hide');
resultBtn.classList.add('hide');
if(t < 0){
    startBtn.classList.add('hide');
    resultBtn.classList.remove('hide');
}
