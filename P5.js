/* ====== Problem 5 =================================== *
 *
 *   2520 is the smallest number that can be divided by
 *   each of the numbers from 1 to 10 without any remainder.
 *
 *   What is the smallest positive number that is
 *   evenly divisible by all of the numbers from 1 to 20?
 *
 * ========================================**/

const MAX_RANGE = 20;

function isModZero() {
  var number = 0;

  for (var i = MAX_RANGE; i > 0; i--) {
    if (number % i !== 0)
      i = MAX_RANGE;
    number += 1;
  }
  return number;

}

function solution() {
  var answer = isModZero();
  console.log(`The solution to problem 5 is: ${answer}`);
}

solution();

/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 40 minutes
 *  Search engine used: Yes. Factorials && recursion
 *  Concepts learned: That recursive calls for computation
 *  should rarely be used. Introduction to node CLI, tail calls
 *
 *  Additional notes: Successfully wrote this in a recursive
 *  call. Worked well for MAX_RANGE = 10, however, upon
 *  higher ranges, stack_size would be exceeded. Looked
 *  into this and it looks like recursive functions
 *  are rarely ever used because of this problem.
 *
 *  With node.js you can use --use-strict --harmony-tailcalls
 *  to optimize the recursive tail call, but the iterative
 *  function ran much quicker.
 *
 * ========================================**/


// Recursive
//
// function isModZero(number, modulus) {

//   // base case
//   if (modulus === 0) {
//     return number;
//   }

//   if (number % modulus !== 0) {
//     return isModZero((number+1), MAX_RANGE);
//   }
//     return isModZero((number+1), (modulus-1));
// }
