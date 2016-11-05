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

function computeIntersection(integers, max) {
    var fullArr = getMultiplesOf(integers, max);
        intersection = [],
        unique = [],
        denominator = commonDenominator(integers);

    intersection = fullArr.filter(function(a){
      if (a % denominator === 0)
        return true;
      else
        unique.push(a);
    });

    return getSum(intersection)/2 + getSum(unique);
}

function getMultiplesOf(integers, max) {
  var tmp = [];

  integers.forEach(function(num) {
    for (var i = 0; i < max; i++)
      if (i % num === 0)
        tmp.push(i);
  });

  return tmp;
}

function getSum(integers) {
  return integers.reduce(function(a,b){
    return a + b;
  }, 0);
}

function commonDenominator(integers) {
  return integers.reduce(function(a,b){
    return a * b;
  });
}

function solution(data) {
  var answer = computeIntersection(data.integers, data.max);

  // solution to problem 1
  console.log(`The sum of all multiples of 3 or 5 below 1000 is: ${answer}`);
}

solution({
  integers: [3, 5],
  max: 1000
});
