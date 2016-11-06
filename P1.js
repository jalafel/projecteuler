/* ====== Problem 1 =================================== *
 *
 *   If we list all the natural numbers below 10 that are
 *   multiples of 3 or 5, we get 3, 5, 6 and 9.
 *
 *   The sum of these multiples is 23.
 *
 *   Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * ========================================**/

function getMultiplesOf(integers, max) {
  var sum = 0;
  for (var i = 0; i < max; i++) {
    if (checkMod(integers, i))
      sum += i;
  }
  return sum;
}

function checkMod(integers, num) {
  return integers.filter(function(mod) {
    return num % mod === 0;
  }).length !== 0;
}

function solution(data) {
  var answer = getMultiplesOf(data.integers, data.max);
  console.log(`The sum of all multiples of 3 or 5 below 1000 is: ${answer}`);
}

solution({
  integers: [3, 5],
  max: 1000
});

/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 1 hour
 *  Search engine used: yes
 *  Concepts learned: number theory, intersection of sets
 *
 *  Additional notes: pay attention to language (in this case, the
 *  word: 'or') which will help determine the tools and
 *  equations necessary to solve your problem
 *
 *  Refactor notes: try to write in as less lines as possible
 *  while maintaining functional design
 *
 * ========================================**/
