const fs = require('fs');
const rd = fs.createReadStream('./fixtures/P13.numbers.txt');
const rl = require('readline').createInterface({
	input: rd
});

var sum = 0, 
	i = 0,
	answer = '';

rl.on('line', (line) => {
	var numbers = line.toString();
	sum += +numbers;
});

rl.on('close', () => {

	sum = sum.toString().split('e')[0];

	while (answer.length < 10) {
		var char = sum[i];

		if (Number.isInteger(+char))
			answer += char;
		else if (char === undefined)
			answer += '0';
		i++;
	}

	console.log(answer);
});