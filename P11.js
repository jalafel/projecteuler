/* ====== Problem 11 =================================== *
 *
 *   In the 20×20 grid below, four numbers along a diagonal
 *   line have been marked in red.
 *
 *   The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
 *
 *   What is the greatest product of four adjacent numbers in
 *   the same direction (up, down, left, right, or diagonally)
 *   in the 20×20 grid?
 *
 * ========================================**/

const fs = require('fs');
const MAX_ADJ = 4;

function calculateDiagonal(array) {

  var diagonalGrid = [];

  function lowerTriangular(array) {
    var grid = transpose(array.slice(0));
    // init to ignore diagonal
    return uppperTriangular(grid, 1);
  }

  function uppperTriangular(grid, init) {

    var grid = grid.slice(0);
    var init = init || 0;
    var tmpGrid = [];
    var MAX_LEN = grid.length - MAX_ADJ + 1;

    for (var pos = init; pos < 20; pos++) {
      for (var i = 0; i < MAX_LEN - pos; i++) {
        var tmpRow = grid[i].slice(pos), tmpCount = i, tmpSum = [];
        for (var j = 0; j < MAX_ADJ; j++) {
          if (j === 0)
            tmpSum.push(tmpRow[tmpCount]);
          else
            tmpSum.push(tmpRow[tmpCount + pos]);

          tmpCount++;
          tmpRow = grid[tmpCount];
        }
        tmpGrid.push(tmpSum);
      }
    }
    return tmpGrid;
  }


  var upper = uppperTriangular(array);
  var lower = lowerTriangular(array);

  diagonalGrid = [].concat(upper, lower);
  return findMaxProduct(diagonalGrid);
}


function calculateHorizontal(array) {

  var valueArray = [], maxSum, grid = array.slice(0);

  for (var i = 0; i < grid.length - 1; i++) {
    var tmpRow = grid[i];
    var MAX_LEN = tmpRow.length - MAX_ADJ + 1;

    for (var j = 0; j < MAX_LEN; j++) {
      valueArray.push(tmpRow.slice(j, j + MAX_ADJ));
    }
  }

  return findMaxProduct(valueArray);;
}

function calculateVertical(array) {
  var grid = transpose(array.slice(0));
  return calculateHorizontal(grid);
}

function calculateReverse(grid) {
  var grid = grid.slice(0), tmpGrid = [];
  for (var i in grid) {
    tmpGrid[i] = grid[i].reverse();
  }
  return tmpGrid;
}

function findMaxProduct(array) {
  for (var i in array) {
    array[i] = array[i].reduce(function(a,b){
      return +a * +b;
    })
  }
  return Math.max.apply(Math, array);
}

function transpose(grid, transposeGrid) {

  var transposeGrid = transposeGrid || [];
  var tmpRow = [];

  if (grid[0].length === 0) {
    return transposeGrid;
  }

  for (var i in grid) {
    tmpRow.push(grid[i][0]);
    grid[i].shift();
  }

  transposeGrid.push(tmpRow);
  return transpose(grid, transposeGrid);

}

function readFile() {
  return fs.readFile('./fixtures/P11.grid.txt',
    {encoding: 'utf8'},
    (err, data) => {
      if (err)
        throw err;

      const input = data.split('\n');

      const grid = [];
      for (var i in input) {
        grid[i] = input[i].split(' ');
      }

      var answer = calculateInput(grid);
      solution(answer);
  });
}

function calculateInput(grid) {

  var largestDiagonal = calculateDiagonal(JSON.parse(JSON.stringify(grid)));
  var largestRDiagonal = calculateDiagonal(calculateReverse(JSON.parse(JSON.stringify(grid))));
  var largestVertical = calculateVertical(JSON.parse(JSON.stringify(grid)));
  var largestHorizontal = calculateHorizontal(JSON.parse(JSON.stringify(grid)));

  return Math.max.apply(Math,
    [largestDiagonal, largestVertical, largestHorizontal, largestRDiagonal]);

}

function solution(answer) {
  console.log(`The solution to problem 11 is: ${answer}`);
}

readFile();

/* ====== Meta ========================================= *
 *
 *  Estimated time of completion: 3 hours
 *  Search engine used: No
 *  Concepts learned: Nothing really
 *
 *  Additional notes: I sort of ended up taking a really long approach to this.
 *  Taking a look at the solutions on ProjectEuler, there was definitely a
 *  better way of calculating this in about 30 lines or less. I definitely
 *  came at with a mechanical, stroke by stroke, strategy. Which, I suppose, is
 *  okay for the first iteration, and admittedly, I got to excerise a bit of
 *  Linear Algebra concepts here. However, if I were to do this again, I would
 *  consider bi-level arrays and take that into account when calculating this,
 *  and also making a reusable function to calculate that all given a for-loop.
 *
 * ========================================**/
