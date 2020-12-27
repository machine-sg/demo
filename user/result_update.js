// alert('alert');
// const saveBtn = document.getElementById('save-btn');



// saveBtn.addEventListener('click', save);

// function save(){
//     var message = `
//     <div class="main-body"><div class="result-box custom-box">
//         <h1>Quiz Result</h1>
//         <table>
//             <tr>
//                 <td>Total Questions</td>
//                 <td><span class="total-question"></span></td>

//             </tr>
//             <tr>
//                 <td>Attempt</td>
//                 <td><span class="total-attempt"></span></td>
//             </tr>
//             <tr>
//                 <td>
//                     Correct
//                 </td>
//                 <td><span class="total-correct"></span></td>
//             </tr>
//             <tr>
//                 <td>Wrong</td>
//                 <td><span class="total-wrong"></span></td>
//             </tr>
//             <tr>
//                 <td>Percentage</td>
//                 <td><span class="percentage"></span></td>
//             </tr>
//             <tr>
//                 <td>Your Total Score</td>
//                 <td><span class="total-score"></span></td>
//             </tr>
//         </table>
//     </div>
// </div>    
// </div>`;

//     const report = document.getElementById('report-card');
//     report.innerHTML = message;
//     console.log('hello')
// }



const resultBox = document.querySelector(".result-box");

const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', save);
saveBtn.classList.remove('hide');
var totalQuestion = document.querySelector('total_question');
var attepmt = document.querySelector('attempted');
var correct = document.querySelector('correct');
var wrong = document.querySelector('wrong');
function save(){
    
    resultBox.querySelector(".total-question").innerHTML= totalQuestion;
    resultBox.querySelector(".total-attempt").innerHTML= attempt;
    resultBox.querySelector(".total-correct").innerHTML= correct;
    resultBox.querySelector(".total-wrong").innerHTML= attempt-correct;
    const percentage = (correct/totalQuestion)*100;
    resultBox.querySelector(".percentage").innerHTML= percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML= correct + " / " + totalQuestion;
}