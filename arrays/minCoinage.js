

// [1, 5, 10, 25] -> target

let coinage = [25, 10, 5, 1]


function getMinimumAmountOfCoins(target) {
	int count = 0;
	for(let i = 0 ; i < coinage.length && target > 0; i++) {
	
		let evenDivision = Math.floor(target / coinage[i]); //0
		if(evenDivision > 0) {

			count += evenDivision;
			let remainder = target % (coinage[i] * evenDivision) // 5
			target = remainder;
		}
	}
	return count;
}

// 80
// 75 - 5
// count = 4



function getMinimumAmountOfCoinsAlt(target) {
	
	
	let temp_sum = 0;
	int count = 0;
	for(let i = 0 ; i < coinage.length; i++) {
		

		let evenDivision = target / coinage[i]
		target % (coinage[i] * evenDivision) // 5




		temp_sum = temp_sum + coinage[i];
		count++;
		if(temp_sum === target) {
			break;
		}
		if(temp_sum  < target) {
			continue;
		}
 		else {
			temp_sum = temp_sum - coinage[i]
			count--;
			i++;
		}

	}
	return count;
}