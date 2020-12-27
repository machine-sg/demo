const resultBox = document.querySelector(".result-box");

//const saveBtn = document.getElementById('save-btn');

//saveBtn.addEventListener('click', save);
var totalQuestion = document.querySelector('total_question');
var attepmt = document.querySelector('attempted');
var correct = document.querySelector('correct');
var wrong = document.querySelector('wrong');
//function save(){
   // saveBtn.classList.remove('hide');
    document.querySelector(".total-question").innerHTML= 10;
    resultBox.querySelector(".total-attempt").innerHTML = 8;
    resultBox.querySelector(".total-correct").innerHTML= 7;
    resultBox.querySelector(".total-wrong").innerHTML= 8-7;
    const percentage = (7/10)*100;
    resultBox.querySelector(".percentage").innerHTML= percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML= 7 + " / " + 10;
//}