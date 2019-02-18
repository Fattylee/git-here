const isPrime = require('./isPrime');

const primeNumbers = (min, max) => {
  if(max === undefined){
    max = min;
    min = 1;
  }

  if (typeof min !== 'number' || (typeof max !== 'number') ) {
    throw TypeError('Only number argument is allowed');
  }
  
  const numbers = [];
  for(; min <= max; min++){
    if(isPrime(min)) {
      numbers.push(min);
    }
  }
  return numbers.length ? numbers: [];
};

console.log(primeNumbers(78,100).join(','));
console.log(primeNumbers(7).join(','));