'use strict';

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

var assert = require('assert');
var event = require('events');
var routeEvent = new event();
var finalPosition = [2, 2];
var allRoutes = {};
var index = 0;

class Route{

	constructor(currentPosition, moves) {
		this.currentPosition = currentPosition || [0, 0];
		this.moves = moves || [];	
	}

	goDown() {
		this.currentPosition[1] += 1;
		this.moves.push('down');
		return this;
	}

	reverseDown() {
		this.currentPosition[1] -= 1;
		this.moves.pop();
		return this;
	}

	goRight() {
		this.currentPosition[0] += 1;
		this.moves.push('right');
		return this;
	}

	reverseRight() {
		this.currentPosition[0] -= 1;
		this.moves.pop();
		return this;
	}

	reverse() {

		var self = this,
			last = self.moves[self.moves.length - 1];

		// Checks for an exact route that exists and then chooses the
		// next possible, distinct move to make next.

		// this is a broken algorithm
		function isDifferentMove(nextMove, i) {

			var i = i === undefined ? (index - 1) : i;
			var lastRoute = allRoutes[i].moves;
			var routeChanged = false;

			console.log('lastRoute: ', lastRoute);
			console.log('currentMoves: ', self.moves);

			if (Object.keys(allRoutes).length > 0 &&
				self.moves.length > 0 &&
				self.moves.length < lastRoute.length) {

				var checkRoute = lastRoute.slice(0, self.moves.length);

				if (checkRoute.equals(self.moves)) {

					console.log('checkRoute.equals: ', nextMove, lastRoute[self.moves.length]);
					
					// flag for changes
					if (nextMove !== lastRoute[self.moves.length].trim()) {
						console.log('next move does not equal the previous move')
						return true;
					} else {
						console.log('else statement: ', nextMove, lastRoute[self.moves.length]);
						
						var testRoute = self;

						if (nextMove === 'right')
							testRoute.goRight();
						else 
							testRoute.goDown();

						return isDifferentMove(nextMove, index - 1);
						
					}
					// route to destination and check if is unique
				} else {
					return isDifferentMove(nextMove, (i - 1));
				}
				
			} else {
				return true;
			}
		}
		
		if (last === 'right') {

			this.reverseRight();

			if (this.isDownPossible() && isDifferentMove('down')) {
				console.log('down is a different move');
				return this.goDown();
			}
			else {
				console.log('down is possible: ', this.isDownPossible())
				console.log('down is not a different move');
				if (index === 3)
					process.kill();
				return this.reverse();
			}

		} else if (last === 'down') {
			
			this.reverseDown();

			if (this.isRightPossible() && isDifferentMove('right')) { 
				return this.goRight();
			}
			else  {
				console.log('right is possible: ', this.isRightPossible())
				console.log('right is not a different move');
				if (index === 3)
					process.kill();
				return this.reverse();
			}
		
		} else if (!last) {
			console.log('no more way of going: ' + this.moves);
			console.log(allRoutes);
			process.kill();
		}

		return self;
	}

	isDestination() {
		return (this.currentPosition[0] === finalPosition[0] &&
				this.currentPosition[1] === finalPosition[1])
	}

	isRightPossible() {
		return this.currentPosition[0] < finalPosition[0];
	}

	isDownPossible() {
		return this.currentPosition[1] < finalPosition[1];
	}

	isUnique() {

		for (var i in allRoutes) {

			var compareArray = allRoutes[i].moves.slice(0);

			if (compareArray.equals(this.moves))
				return false;
	
		}

		return true;
	}
}

routeToDest(new Route());

function routeToDest(route, probe) {

	if (route.isRightPossible()) {

		route.goRight();

	} else if (route.isDownPossible()) {

		route.goDown();

	} else if (route.isDestination()) {

		if (route.isUnique()) {

			addUniqueRoute(route);

			if (probe)
				return true;
			return routeToDest(new Route());

		} else {

			route.reverse();

		}
	}

	return routeToDest(route);
}

function addUniqueRoute(route) {
	console.log('allRoutes', allRoutes);
	allRoutes[index] = route;
	index++;
	return true;
}

function arrayEquals(a, b) {
	if (a.length === b.length &&
	    a.every((el, i) => {
	        return el === b[i];
	    })) 
	{
	   return true;
	} else {
	   return false;
	}
}