



// [1,2,3,4,4,5,5,6,7]


// [1,2,3,4,4,4,5,5,6,7]
       // ^ ^


// [1,2,3,4,4,5,5,6,7]
       // ^ ^


// [1,2,3,4,5,5,6,7]
         // ^ ^


// [1,2,3,4,4,5,5,6,7]
       // ^ ^


// [1,1,2,3,3]

// [1,2,3,3]
     // ^ ^


// [1]
 // ^ ^

function removeDuplicatesFromArray(array) {
	if(array === null || array.length <= 1) return array

	int left = 0;
	int right = 1;

	while(left < right && right < array.length) {
		if(array[left] === array[right]) {
			array.splice(left, 1);
		} else {
			left++;
			right++;
		}
	}
	return array;
}
