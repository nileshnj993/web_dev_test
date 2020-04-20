function multiply(x,y){
	return x*y;
};

console.log(multiply(3,5));
console.log(multiply);
console.log(multiply.toString());
multiply.version = "v.1.0.0";
console.log("The version of this function is : "+multiply.version);

// function factory

function generator(multiplier){
	function x(a){
		return a*multiplier;
	};
	return x;
};

var multiplyBy3 = generator(3);
var doubleAll = generator(2);

console.log(multiplyBy3(5));
console.log(doubleAll(10));

// passing functions as arguments

function doOperation(operation,x){
	return(operation(x));
};

console.log(doOperation(multiplyBy3,10));