const numbers = document.querySelectorAll('.numbers button');
const result = document.querySelector('#result');
const operators= document.querySelectorAll('.operators button')


console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    number.addEventListener('click', function() {
        console.log(number.innerHTML);
        result.innerHTML += number.innerHTML;
    });
}


for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    operator.addEventListener('click', function() {
        console.log(operator.innerHTML);
        result.innerHTML += operator.innerHTML;
    });
}