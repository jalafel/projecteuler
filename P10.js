/* ====== Problem 10 =================================== *
 *
 *   The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 *   Find the sum of all the primes below two million.
 *
 * ========================================**/

const MAX_VALUE = 2e6;

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

function sumOfPrimes() {
  var sum = 0,
      base = 2;

  do {
    if (isPrime(base))
      sum += base;
    base++;
  } while (base < MAX_VALUE);

  return sum;
}

function solution() {

  var answer = sumOfPrimes();

  console.log(`The solution to problem 10 is: ${answer}`);
}

solution();

/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 10
 *  Search engine used: No
 *  Concepts learned:
 *
 *  Additional notes: This took ages to complete. Is there
 *  a way to calculate this quicker?
 *
 * ========================================**/
