var struct = {};

determineLongestChain();

function getEven(num) {
	return num / 2;
}

function getOdd(num) {
	return (3 * num) + 1; 
}
 
function getSequence(seq, num) {
	
	if (num === 1)
		return seq;

	if (structContains(num)) {
		seq.push(getStructSequence(num));
		return seq;
	} else if (num % 2 === 0) {
		seq.push(getEven(num));
	} else {
		seq.push(getOdd(num));
	}

	return getSequence(seq, seq[seq.length - 1]);
}


function determineLongestChain() {

	for (var i = 1e6; i > 1; i--) {
		createStruct(i, getSequence([], i));
	}
	
	getLongest();
}

function getLongest() {
	
	var llen = 0, len = 0, largest = {};
	
	for (var i in struct) {
		len = struct[i].length;

		if (len > llen) {
			llen = len;
			largest = struct[i];
		}
	}

	console.log(`The largest sequence length is ${largest.index}`);
}

function createStruct(index, sequence) {
	if (struct[index]) {
		throw new Error('Structure already has this index.');
	} else {
		struct[index] = {
			index: index,
			sequence: sequence,
			length: sequence.length
		}
	}
}

function structContains(index) {
	return !!struct[index] && !!(struct.index === index);
}

function getStructSequence(index) {
	return struct[index].sequence;
}