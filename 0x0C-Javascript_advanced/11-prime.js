// Changing stack order using setTimeout
function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    let isprime = false;
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        isprime = false;
        break;
      }
    }

    if (isprime) {
      ++count;
    }
  }

  return count;
}

function loop() {
  for (let k = 0; k < 100; ++k) {
    countPrimeNumbers();
  }
}

let start = performance.now();
setTimeout(loop(), 0);
let end = performance.now();

let final = end - start;
console.log(`Execution time of calculating prime numbers 100 times was ${final} milliseconds.`);
