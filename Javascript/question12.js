// Javascript implementation of the approach

// Function to return the ending index for the
// largest valid sub-string starting from index i
function getEndingIndex(str,n,i)
{
		i++;
		while (i < n) {
			let curr = str[i];
			let prev = str[i - 1];

			// If the current character appears after
			// the previous character according to
			// the given circular alphabetical order
			if ((curr == 'a' && prev == 'z') ||
				(curr.charCodeAt(0) - prev.charCodeAt(0) == 1))
				i++;
			else
				break;
		}

		return i - 1;
}

// Function to return the length of the longest
// sub-string of consecutive characters from str
function largestSubStr(str,n)
{
		let len = 0;

		let i = 0;
		while (i < n) {

			// Valid sub-string exists from index
			// i to end
			let end = getEndingIndex(str, n, i);

			// Update the length
			len = Math.max(end - i + 1, len);
			i = end + 1;
		}

		return len;
}

// Driver code
let str = "abcabcdefabc";
let n = str.length;

document.write(largestSubStr(str, n));