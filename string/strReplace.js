



string replaceStr(string input, string search, string replace)
"abxy" <-- "abcds", "cds", "xyz"


 a b c d s
     ^   ^


 a b x y z
     ^   ^
left 
right



 a b x y z      abx
 ^     ^
left 0
right 1
function replaceString(string input, string search, string replace) {


"abxy" <-- "abcd", "cd", "xy"



"abcd", "xy", "xy"

"x" "abcsbdsfj"
"" ""

// 1. search is not in input
// 2. search is at beginning
// 3. search is at the end

	
	let left = 0;  
	let right = 1; 

	let sIdx = 0
	let current_length = 0;
	let found= false
	for(int i = 0 ; i < input.length; i++) {
		if(search[sIdx] === input[left]) {  
			sIdx++; 
			current_length ++; 
			while(input[right] === search[sIdx]) {
				sIdx++; 
				right++; 
				current_length ++;  
			}

			if(current_length === search.length) { found = true; break; }
			// do the rest of the search
		} else { 
			left++;
			right++;
		}
	}

	// do the replace
	for(let j = left, let i = 0; j < search.length && found; j++, i++) {  j === 2, i ===0
		input[j] = search[i];
	}
	return input;

}