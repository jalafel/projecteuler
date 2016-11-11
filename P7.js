/* ====== Problem 7 =================================== *
 *
 *   By listing the first six prime numbers:
 *
 *   2, 3, 5, 7, 11, and 13,
 *
 *   We can see that the 6th prime is 13.
 *
 *   What is the 10,001st prime number?
 *
 * ========================================**/

const assert = require('assert');

function isPrime(x) {

  if (x === 1 || x === 2)
    return true;

  for (var i = 2; i < x; i++) {
    if (x !== i && x % i === 0)
      return false;
    else if ((i+1) === x)
      return true;
  }
}

function getPrimeIndex(index) {

  var primes = [], i = 1;

  do {
    i += 1;
    if (isPrime(i))
      primes.push(i);
  } while (primes.length < index);

  return primes[primes.length - 1];
}

function solution() {

  var answer = getPrimeIndex(10001);

  console.log(`The solution to problem 7 is: ${answer}`);
}

assert.strictEqual(getPrimeIndex(1), 2);
assert.strictEqual(getPrimeIndex(6), 13);

solution();

/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 20 minutes
 *  Search engine used: Yes. Looked up the difference
 *  between iteratively finding primes vs. recursively.
 *  Concepts learned: Practice of do-whiles
 *
 *  Additional notes:
 *
 * ========================================**/
