const sum = (obj) => {
	let sum = 0;
	for (key in obj) {
	  sum += obj[key];
	}
	return (sum);
  }

const output = (obj) => {
	for (key in obj) {
		console.log(`${key} : ${obj[key]}`);
	  }
}

const pickOneWinner = (students, winnerNumber) => {
	var i = 0;

	for (const key in students) {
		i += students[key];
		if (i > winnerNumber){
			return (key);
		}
	}
}

weightedRandomPicker = (students, weightSum) => {
	let rand = parseInt(Math.random() * 100);
	for (key in students) {
		students[key] = students[key] * rand;
	}

	let winnerNumber = parseInt(Math.random() * (weightSum * rand - 1));
	
	console.log(pickOneWinner(students, winnerNumber));
	
}





var weights = {
	'person1-old': 3,
	'person2-old': 3,
	'person3-old': 3,
	'person4-new': 1
}

weightSum = sum(weights);

let winners = [];


weightedRandomPicker(weights, weightSum);

// output(weights);
