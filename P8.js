/* ====== Problem 8 =================================== *
 *
 *   The four adjacent digits in the 1000-digit number that
 *   have the greatest product are 9 × 9 × 8 × 9 = 5832.
 *
 *   Find the thirteen adjacent digits in the 1000-digit
 *   number that have the greatest product. What is the value
 *   of this product?
 *
 * ========================================**/

const assert = require('assert');
const fs = require('fs');

var series = '';

function splitBy(series, adjacentMax) {

  var array = [];
  for (var i = 0; i < series.length - adjacentMax; i++) {
    var product = 1;
    for (var j = i; j < (i + adjacentMax); j++) {
      if (series[j])
        product *= +series[j];
    }
    array.push({position: i, product: product});
  }

  return array;
}

function findLargest(array) {
  var max = 0, position = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].product > max) {
      max = array[i].product;
      position = array[i].position;
    }
  }
  return {largest: max, position: position};
}

function getAdjacent(series, position, adjacentMax) {
  return series.substr(position, adjacentMax);
}

function findAdjacentProduct(series, adjacentMax) {
  var array = splitBy(series, adjacentMax);
  var product = findLargest(array);
  return product.largest;
}

function solution(product) {
  fs.readFile('./fixtures/P8.series.txt',
    {encoding: 'utf8'},
    (err, data) => {
      if (err) throw err;
      data = data.split('\n').join('');
      var answer = findAdjacentProduct(data, 13);
      console.log(`The solution to problem 8 is ${answer}`);
  });
}

solution();


/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 40 minutes
 *  Search engine used: Yes. For file read.
 *  Concepts learned: Basic usage of fs from node. Got to
 *  reiterate Math.max.apply(Math, array); Split a string by
 *  endlines and rejoin.
 *
 *  Additional notes:
 *
 * ========================================**/
