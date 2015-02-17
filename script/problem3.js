var isPrime = function(input){
	for(var i = 2; i < input; i++){
		if(input % i === 0){
			return false;
		}
	}
	return true;
};

var maxPrimeFactor = function(input){
	var divisor = input - 1;

	while(divisor > 1){
		if(input % divisor === 0 && isPrime(divisor)){
			return divisor;
		}
		divisor--;
	}
	return input;
}

var numberInput3 = document.querySelector("[name=inputNumber3]");
var resultArea3 = document.querySelector(".max-prime-factor");

numberInput3.addEventListener('input', function() {
    var val = maxPrimeFactor(this.value);
    resultArea3.textContent = val;
});