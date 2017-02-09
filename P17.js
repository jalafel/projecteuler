'use strict';

function getWritten(num) {

	function getSingleDigit(x) {
		switch(x || num) {
			case 1:
				return 'one';
			case 2:
				return 'two';
			case 3:
				return 'three';
			case 4:
				return 'four';
			case 5:
				return 'five';
			case 6:
				return 'six';
			case 7:
				return 'seven';
			case 8:
				return 'eight';
			case 9:
				return 'nine';
			break;
		}
	}
	
	function getDoubleDigit(x) {
		
		var baseDDigits = {
			'20': 'twenty',
			'30': 'thirty',
			'40': 'forty',
			'50': 'fifty',
			'60': 'sixty',
			'70': 'seventy',
			'80': 'eighty',
			'90': 'ninety'
		};

		if ((x || num) < 20) {
			switch(x || num) {
				case 10: return 'ten';
				case 11: return 'eleven';
				case 12: return 'twelve';
				case 13: return 'thirteen';
				case 15: return 'fifteen';
				default:
					var leadingNum = num > 100 ? getSingleDigit(thirdDigit) : getSingleDigit(secondDigit);
					if (leadingNum.charAt(leadingNum.length - 1) === 't')
						leadingNum = leadingNum.substring(0, leadingNum.length - 1);
					return leadingNum + 'teen';
			}
		} else {
			var key = (num > 100 ? secondDigit.toString() : firstDigit.toString()) + '0';
			if ((num > 100 && thirdDigit === 0) || secondDigit === 0)
				return baseDDigits[key];
			return baseDDigits[key] + getSingleDigit((num > 100 ? thirdDigit : secondDigit));
		}
	}

	function getTripleDigit() {
		var tripleBase = getSingleDigit(firstDigit) + 'hundred';
		
		if (secondDigit === 0 && thirdDigit === 0)
			return getSingleDigit(firstDigit)+'hundred';
		else if (secondDigit === 0) {
			return tripleBase + 'and'+ getSingleDigit(thirdDigit);
		} else {
			var tenthMark = +(secondDigit.toString() + thirdDigit.toString());
			if (thirdDigit === 0)
				return tripleBase + 'and' + getDoubleDigit(tenthMark);
			return tripleBase + 'and' + getDoubleDigit(tenthMark);
		}
	}

	var firstDigit = +num.toString().charAt(0);
	var secondDigit = +num.toString().charAt(1);
	var thirdDigit = +num.toString().charAt(2);

	if (num.toString().length === 1) 
		return getSingleDigit();
	else if (num.toString().length === 2)
		return getDoubleDigit();
	else if (num.toString().length === 3)
		return getTripleDigit();
	else if (num.toString().length === 4)
		return 'onethousand';
}

function convertNumberToWords(max) {
	
	var numbers = [];

	for (var i = 1; i <= max; i++) {
		numbers.push(getWritten(i));
		console.log(i + ': ' + getWritten(i));
	}

	return numbers;
}


function countLetters(max) {

	var words = convertNumberToWords(max).map((word) => {
		return word.replace(/\s+g/, '').length;
	}).reduce((a, b) => {
		return a + b;
	}, 0);

	console.log(`The length from 1 to ${max} is ${words}`);
}

countLetters(1000);
