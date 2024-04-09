const numbers = document.querySelectorAll('.numbers button');
const result = document.querySelector('#result');
const equal = document.querySelector('.equal');
const operators= document.querySelectorAll('.operators button');


console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    number.addEventListener('click', function() {
        console.log(number.innerHTML);
        result.innerHTML += number.innerHTML;
        result.innerHTML = parseInt(result.innerHTML);
    });
}

let num1 = "";
let operation = "";

for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    operator.addEventListener('click', function() {
        console.log(operator.innerHTML);
        num1 = parseInt(result.innerHTML);
        operation += operator.innerHTML;
        result.innerHTML = "0";
    });
}

equal.addEventListener("click", function() {
    console.log("uguale");

    const num2 = parseInt(result.innerHTML);

    if (operation === "+") {
        result.innerHTML = num1 + num2;
        console.log(result.innerHTML)

    }

    else if(operation=== "x") {
    result.innerHTML = num1 * num2;
    console.log(result.innerHTML)
      


    }
   
    else if(operation=== "/") {
        result.innerHTML = num1 / num2;
        console.log(result.innerHTML)
    }    


    else if(operation=== "-") {
        result.innerHTML = num1 - num2;
        console.log(result.innerHTML)
    }    
   
})