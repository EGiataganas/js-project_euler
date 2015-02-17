var evenFibonacciNumbers = function(num){
    var sum = 0;
    var sequence = [];
    sequence[0] = sequence[1] = 1;
    sequence[2] = 2;
    
    while(sequence[2] <= num){
        sequence[2] = sequence[0] + sequence[1];
        if(sequence[2] % 2 === 0 && sequence[2] <= num){
            sum += sequence[2];
        }
        sequence[0] = sequence[1];
        sequence[1] = sequence[2];
    }
    return sum;
};

var numberInput2 = document.querySelector("[name=inputNumber2]");
var resultArea2 = document.querySelector(".even-fibonacci-numbers");

numberInput2.addEventListener('input', function() {
    var val = evenFibonacciNumbers(this.value);
    resultArea2.textContent = val;
});