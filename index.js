const isPrime = (num) => {

  let test = true;
    // new Array(num).fill(0).forEach((e,i) => {

      // if (num % i === 0 && i > 1) {
      //   console.log('here i go', i);
      //   test = false;
      //   return test;
      // }
    // });
    for(let i=0; i< num; i++) {
      if (num % i === 0 && i > 1) {
        console.log('here i go', i);
        test = false;
        return false;
      }
    }

    return true;
};

console.log(isPrime(21));