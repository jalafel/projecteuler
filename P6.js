/* ====== Problem 6 =================================== *
 *
 *   The sum of the squares of the first ten natural numbers is,
 *
 *   1^2 + 2^2 + ... + 10^2 = 385
 *
 *   The square of the sum of the first ten natural numbers is,
 *
 *   (1 + 2 + ... + 10)^2 = 55^2 = 3025
 *
 *   Hence the difference between the sum of the squares of
 *   the first ten natural numbers and the square of the sum is,
 *
 *   3025 − 385 = 2640.
 *
 *   Find the difference between the sum of the squares of the
 *   first one hundred natural numbers and the square of the sum.
 *
 * ========================================**/

const assert = require('assert');

function sumOfSquares(MAX_NATURAL) {
  var sum = 0;
  for (var i = MAX_NATURAL; i > 0; i--) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

function squareOfSums(MAX_NATURAL) {
  var sum = 0;
  for (var i = MAX_NATURAL; i > 0; i--) {
    sum += i;
  }
  return Math.pow(sum, 2);
}

function differenceOf(MAX_NATURAL) {
  return squareOfSums(MAX_NATURAL) - sumOfSquares(MAX_NATURAL);
}

function solution() {
  var answer = differenceOf(100);
  console.log(`The solution to problem 6 is: ${answer}`);
}

assert.strictEqual(squareOfSums(10), 3025);
assert.strictEqual(sumOfSquares(10), 385);
assert.strictEqual(differenceOf(10), 2640);

solution();

/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 10 minutes
 *  Search engine used: No.
 *  Concepts learned: Implementation of assert equals.
 *
 *  Additional notes: Was able to utilize assert equals
 *  to verify algorithms are working for the cases
 *  given by project euler. Useful for testing cases.
 *
 * ========================================**/
