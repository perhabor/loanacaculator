 let amount = document.querySelector("#amountArea");
let interest = document.querySelector("#percentageArea");
let aggmonthlyPayment = document.querySelector("#repaymentPeriod");
let monthlyPayment = document.querySelector("#monthly-payment-output")
let totalPayment = document.querySelector("#total-payment-output")
let eInterest = document.querySelector("#total-interest-output");
let alertMsg = document.querySelector('#showAlert')
const loanForm = document.querySelector("#loanForm");
loanForm.addEventListener("submit", fixLoanForm);

function fixLoanForm(e) {
    e.preventDefault();
    if ((amount.value == "") || (interest.value == "") || (aggmonthlyPayment.value=="")) {return alert("kindly enter a number");
}else if (isNaN(amount.value) || isNaN(interest.value) || isNaN(aggmonthlyPayment.value)) {

        return alert("kindly check number input");
      }
      const valueOne = amount.value * (interest.value/100 /12);
      const valueTwo = (1 + interest.value/100/12) ** aggmonthlyPayment.value;
       monthlyPayment.value = (valueOne *valueTwo)/(valueTwo-1);
      totalPayment.value= ((valueOne *valueTwo)/(valueTwo-1)) *aggmonthlyPayment.value;

      eInterest.value = totalPayment.value-amount.value;
      console.log(eInterest.value)
      
      
    
    }



// function showAlert(message,type) {
//     alertMsg.innerHTML = `<div class= "alert alert-${type} alert text-center" role = "alert"{message} </div>`

//     alertMsg.style.disply = "block"; 
//     setTimeout(function () {
//         alertMsg.style.display = "none";  
//     },3000)
// }    


