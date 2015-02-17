var sumOfMultiplesOf3and5 = function (input){
	var sum = 0;
	for (var i = 1; i <= input; i++) {
		if(i%3 === 0 || i%5 === 0){
			sum += i;
		}
	};
	return sum;
}

var numberInput1 = document.querySelector("[name=inputNumber1]");
var resultArea1 = document.querySelector(".sum-of-multiples-of-3-and-5");

numberInput1.addEventListener('input', function() {
	var val = sumOfMultiplesOf3and5(this.value);
	resultArea1.textContent = val;
});