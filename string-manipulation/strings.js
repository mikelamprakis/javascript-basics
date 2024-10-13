// Find the Longest Substring Without Repeating Characters:
function lengthOfLongestSubstring(s) {
    let map = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (map[s[right]] !== undefined && map[s[right]] >= left) {
            left = map[s[right]] + 1;
        }
        map[s[right]] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3


// Compress the string 
function compressString(s) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        } else {
            compressed += s[i] + (count > 1 ? count : '');
            count = 1;
        }
    }

    return compressed.length < s.length ? compressed : s;
}

console.log(compressString("aabcccccaaa")); // Output: "a2bc5a3"


// Check if Two Strings are Permutations of Each Other:
function arePermutations(str1, str2) {
    if (str1.length !== str2.length) return false;

    let count = {};


    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }
    console.log(count);

    for (let char of str2) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

console.log(arePermutations("abc", "bca")); // Output: true
console.log(arePermutations("abc", "def")); // Output: false


//Find the First Non-Repeating Character:
function firstNonRepeatingChar(str) {
    let count = {};

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"


//Find the Most Frequent Character:
function mostFrequentChar(str) {
    let count = {};
    let maxCount = 0;
    let maxChar = '';

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
        if (count[char] > maxCount) {
            maxCount = count[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(mostFrequentChar("abacabad")); // Output: "a"


// Convert a String to Title Case:
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(toTitleCase("hello world")); // Output: "Hello World"

//Remove Duplicate Characters
function removeDuplicates(str) {
    return Array.from(new Set(str)).join('');
}

console.log(removeDuplicates("hello world")); // Output: "helo wrd"

// Capitalize Each Word
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"


// Reverse Words in a String
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("hello world")); // Output: "world hello"