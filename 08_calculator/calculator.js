const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(integers) {
  let sum = 0;
	for (let integer of integers){
    sum += integer;
  }
  return Number(sum);
};

const multiply = function(integers) {
  let output = 1;
	for (let integer of integers){
    output *= integer;
  }
  return output;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let output = 1;
	for (let i = 2; i <= x; i++){
    output = output * i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
