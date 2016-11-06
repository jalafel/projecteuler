/* ====== Problem 2 =================================== *
 *
 *   The prime factors of 13195 are 5, 7, 13 and 29.
 *
 *   What is the largest prime factor of the number 600851475143 ?
 *
 * ========================================**/

var MAX_VALUE = 100000;

function isPrime(x) {

  if (x === 1 || x === 2) {
    return true;
  }

  for (var i = 2; i < x; i++) {
    if (x !== i && x % i === 0)
      return false;
    if ((i+1) === x)
      return true;
  }
}

function getPrimesUpTo() {

  var prime_array = [];

  for (var i = 0; i < MAX_VALUE; i++) {
    if (isPrime(i))
      prime_array.push(i);
  }

  return prime_array;
}

function getPrimeFactor(base, factorials) {

  var primes = getPrimesUpTo();

  for (var i = 2; i < primes.length; i++) {

    if (base % i === 0) {
      console.log(`${base} % ${i} === 0`);
      factorials.push(i);
      getPrimeFactor(base/i, factorials);
      return factorials;
    }
  }
}

function solution(base) {
  var answer = getPrimeFactor(base, []);
  console.log(`The largest prime factor for ${base} is ${answer[answer.length - 1]}`);
}

solution(600851475143);

/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 45 minutes
 *  Search engine used: no
 *  Concepts learned: You can use array keys in ES6 backtick
 *    consoles. What the difference between Prime Numbers
 *    and Prime Factors are. Runtime speed of arrays.
 *
 *  Additional notes: How can I make this a faster process?
 *    currently with the arrays and if statements I have
 *    a high O(N) (take time to solve this as well.) This
 *    is not written purely recursive. I think you need
 *    to go back and correct your understanding on how
 *    to write and implement recursive functions.
 *
 * ========================================**/