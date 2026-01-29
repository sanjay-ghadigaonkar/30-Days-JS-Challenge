


let Income = document.getElementById("salaryInput");
let CalcBtn  = document.getElementById("calcBtn");
let TaxPrice = document.getElementById("taxPrice");
let FinalSalary = document.getElementById("finalSalary");

     CalcBtn.addEventListener("click" , function() {
      

    //  console.log("btnclick");
      let salary = Number(Income.value);

      if (salary === 0 || salary === "") {
        alert("First enter income!")
        return;
      }

       let tax = 0;

      if (salary > 1000000 ) {
         tax = salary * 0.10; 
        }else if (salary > 500000 ) {
         tax = salary * 0.15; 
     } else {
      tax = 0 ; //no tax
      
     }
       let bachaHuaaPaisa = salary - tax ;
       TaxPrice.innerText = `${tax}`;
       FinalSalary.innerText = `${bachaHuaaPaisa}`;

     });
