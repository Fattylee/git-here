const isPrime = (number) => {
  if (number <= 1) return !!0;
  if (number === 2) return true;

  const max = Math.sqrt(number) + 1;
  for(let i=2; i< max; i++){
    if(number % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = isPrime;
