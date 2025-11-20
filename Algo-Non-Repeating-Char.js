function SearchingChallenge(str) {
  let charCounts = {};
  
  // 1. Count occurrences of each character
  for (let char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  
  let firstChar = "";
  // 2. Find the first character with a count of 1
  for (let char of str) {
    if (charCounts[char] === 1) {
      firstChar = char;
      break; // Stop as soon as we find the first one
    }
  }

  // 3. Concatenate with the ChallengeToken
  let token = "921eb5b6q";
  let combinedString = firstChar + token;
  
  let finalOutput = "";
  
  // 4. Loop and replace every 4th character with an underscore
  for (let i = 0; i < combinedString.length; i++) {
    // Check if the position is a multiple of 4
    if ((i + 1) % 4 === 0) {
      finalOutput += "_";
    } else {
      finalOutput += combinedString[i];
    }
  }

  return finalOutput;
}

// keep this function call here 
// console.log(SearchingChallenge("abcdef"));
