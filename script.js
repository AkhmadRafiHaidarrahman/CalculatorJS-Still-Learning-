const btn = document.querySelectorAll(".btn");
const input = document.getElementById("input");
const nmbr = document.querySelectorAll(".btn-nbr") 
const btnequals = document.querySelector(".btn-equals");


nmbr.forEach((button) => {
    button.addEventListener("click",function(){
        console.log(button)
        input.value += button.innerHTML
    })
})
btn.forEach((equals) => {
    equals.addEventListener("click", function(){
        input.value += equals.innerHTML
        console.log(equals)
        input.value = eval(input.value)
    })
})
btnequals.addEventListener("click", function(){
    input.value = eval(input.value)
})

// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// switch (expression) {
//   case caseExpression1:
//     statements
//   case caseExpression2:
//     statements
//   // …
//   case caseExpressionN:
//     statements
//   default:
//     statements
// }