function ArrayChallenge(arr) {
  const N = arr[0];
  
  const partToFront = arr.slice(N);
  const partToEnd = arr.slice(0, N);
  const rotatedArray = partToFront.concat(partToEnd);

  const outputStr = rotatedArray.join('');
  
  const token = "921eb5b6q";
  const combinedString = outputStr + token;
  
  let finalOutput = "";
  
  for (let i = 0; i < combinedString.length; i++) {
    if ((i + 1) % 4 === 0) {
      finalOutput += "_";
    } else {
      finalOutput += combinedString[i];
    }
  }

  return finalOutput;
}

// console.log(ArrayChallenge([3, 2, 1, 6]));
