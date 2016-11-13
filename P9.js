/* ====== Problem 9 =================================== *
 *
 *   A Pythagorean triplet is a set of three natural numbers,
 *     a < b < c, for which, a2 + b2 = c2
 *
 *   For example,
 *     3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 *   There exists exactly one Pythagorean triplet for which
 *     a + b + c = 1000.
 *
 *   Find the product abc.
 *
 * ========================================**/


function getSquareRoots(max) {
  var sqrt = [], base = 1;
  do {
    sqrt.push(Math.pow(base, 2));
    base++;
  } while (base < max);
  return sqrt;
}

function findTriplet() {

  var sqrts = getSquareRoots(1000),
      triplet = [];

  for (var i = 0; i < sqrts.length; i++) {
    for (var j = 0; j < sqrts.length; j++) {
      var a, b, c;
      c = Math.sqrt(sqrts[i] + sqrts[j]);
        if (c % 1 === 0) {
          a = Math.sqrt(sqrts[i]);
          b = Math.sqrt(sqrts[j]);
          if (a + b + c === 1000)
            triplet = a * b * c;
        }
    }
  }

  return triplet;
}


function solution() {
  var answer = findTriplet();
  console.log(`The solution to problem 9 is: ${answer}`);
}

solution();

/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 40 minutes
 *  Search engine used: Yes.
 *  Concepts learned: Math.sqrt.
 *
 *  Additional notes:
 *
 * ========================================**/
