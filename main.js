const buttons = document.querySelectorAll(".button")

const display = document.querySelector(".screen")

let firstOperand = null;
let operator = null;
let currentOperand = '';

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const target = event.target;
        const value = target.innerText;
        console.log(value);
        if(target.id === "clear"){

            firstOperand = null;
            operator = null;
            currentOperand = '';
            display.innerText = '';

        }else if (target.id == "pm"){

            display.innerText = -1 * display.innerText;
        
        }else if(target.id == "percentage"){
            
            display.innerText = parseFloat(display.innerText) / 100;
        
        }else if(
            target.id == "divide" ||
            target.id == "multiply" ||
            target.id == "subtract" ||
            target.id == "add"
        ){
            operator = value;
            firstOperand = parseFloat(display.innerText);
            currentOperand = "";
        
        }else if(target.id == "equal"){

            if(operator){
                const secondOperand = parseFloat(display.innerText);
                if(operator === "+"){
                    firstOperand += secondOperand;
                }else if(operator === "-"){
                    firstOperand -= secondOperand;
                }else if(operator === "X"){
                    firstOperand *= secondOperand;
                }else if(operator === "/"){
                    firstOperand /= secondOperand;
                }

                operator = null;
                currentOperand = firstOperand.toString();
                // display.innerText = firstOperand;
                if(currentOperand.length <= 10){
                    display.innerText = firstOperand;
                }else{
                    display.innerText = "ERROR";
                }
            }
            
        }else{
            if(value === "." && currentOperand.includes(".")){
                return;
            }
            currentOperand += value;
            // display.innerText = currentOperand;
            if(currentOperand.length <=10){
                display.innerText = currentOperand;
            }
        }
    })
})