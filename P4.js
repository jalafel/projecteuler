/* ====== Problem 1 =================================== *
 *
 *   A palindromic number reads the same both ways. The largest
 *   palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 *   Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * ========================================**/

function getFirst(str) {
  return str.substr(0, 1);
}

function getLast(str) {
  return str.substr(-1, str.length - 1);
}

function getMiddle(str) {
  return str.slice(1, -1);
}

function isPalindrome(x) {

  if (x.length === 1 || x.length === 0)
    return true;

  if (getFirst(x) === getLast(x)) {
    return isPalindrome(getMiddle(x));
  }

  return false;
}

function getProductOfPalindrome(base, max) {

  var palindromeProduct = [];

  for (var i = base; i < max; i++) {
    for (var j = base; j < max; j++) {
      product = i * j;
      if (isPalindrome(product.toString()))
        palindromeProduct.push(product);
    }
  }

  return Math.max.apply(Math, palindromeProduct);
}

function solution(data) {

  var base = Math.pow(10, data.digitLimit - 1);
  var max = Math.pow(10, data.digitLimit);
  var answer = getProductOfPalindrome(base, max);

  console.log(`The largest palindrome made from 3-digit numbers is: ${answer}`);
}

solution({
  digitLimit: 3
});

/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 40 minutes
 *  Search engine used: Yes
 *  Concepts learned: Math.max.apply() / analogously Math.min.apply();
 *  Math.pow(base, exponent);
 *
 *  Additional notes: Beginning to get a bit better at
 *
 * ========================================**/
