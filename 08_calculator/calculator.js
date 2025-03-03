const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	const sum = a.reduce(((initial, num) => initial + num), 0);
  return sum;
};

const multiply = function(a) {
  const mult = a.reduce(((initial, num) => initial * num), 1);
  return mult;
};

const power = function(a) {
	const pwr = a.reduce(function(initial, num){
    let result = initial;
    if(num > 0){
      for(let i = 1; i < num; i++){
        result *= initial;
      }
    }
    return result;
  })
  return pwr;
};

const factorial = function() {
	
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
