const isPrime = require('./isPrime');

const primeNumbers = (min, max) => {
  console.log('Computing prime numbers...');
  return new Promise((resolve, reject) => {
  setTimeout(() => {
        if(max === undefined){
    max = min;
    min = 1;
  }
  
  max = Math.abs(max);
  min = Math.abs(min);
  
  if(max < min) {
    [min, max] = [max, min];
  }

  if (typeof min !== 'number' || (typeof max !== 'number') ) {
    reject('Only number argument is allowed');
  }
  
  const numbers = [];
  for(; min <= max; min++){
    if(isPrime(min)) {
      numbers.push(min);
    }
  }
  resolve(numbers.length ? numbers: []);
  }, 2000); // End setTimeout
  }); // End of promise
};

primeNumbers(-72, -111)
  .then(res => console.log(res.join(',')))
  .catch(console.log);