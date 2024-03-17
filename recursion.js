/** product: calculate the product of an array of numbers. */

function product(nums) {
	// base case: if the array is empty, return 1
	if (nums.length === 0) {
		return 1;
	}
	// recursive case: multiply the first number by the product of the rest of the array
	else {
		return nums[0] * product(nums.slice(1));
	}
}

function longest(words) {
	// base case: if the array is empty, return 0
	if (words.length === 0) {
		return 0;
	}
	// recursive case: compare the length of the first word with the length of the longest word in the rest of the array
	else {
		return Math.max(words[0].length, longest(words.slice(1)));
	}
}
/** everyOther: return a string with every other letter. */

function everyOther(str) {
	// base case: if the string is empty or has only one character, return the string itself
	if (str.length <= 1) {
		return str;
	}
	// recursive case: return the first character concatenated with the result of calling everyOther on the string starting from the third character
	else {
		return str[0] + everyOther(str.slice(2));
	}
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	// base case: if the string is empty or has only one character, it's a palindrome
	if (str.length <= 1) {
		return true;
	}
	// recursive case: if the first and last characters are the same, check if the substring between them is a palindrome
	else if (str[0] === str[str.length - 1]) {
		return isPalindrome(str.slice(1, str.length - 1));
	}
	// if the first and last characters are not the same, it's not a palindrome
	else {
		return false;
	}
}

function findIndex(arr, val, index = 0) {
	// base case: if the array is empty, return -1
	if (index === arr.length) {
		return -1;
	}
	// if the first element of the array is the value, return the index
	else if (arr[index] === val) {
		return index;
	}
	// recursive case: check the next index
	else {
		return findIndex(arr, val, index + 1);
	}
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
	// base case: if the string is empty, return an empty string
	if (str === "") {
		return "";
	}
	// recursive case: return the last character of the string concatenated with the reverse of the rest of the string
	else {
		return str[str.length - 1] + revString(str.slice(0, str.length - 1));
	}
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let stringArray = [];

	for (let key in obj) {
		if (typeof obj[key] === "string") {
			stringArray.push(obj[key]);
		} else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
			stringArray = stringArray.concat(gatherStrings(obj[key]));
		}
	}

	return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
