function ArrayChallenge(strArr) {
  const list1 = strArr[0].split(',').map(Number);
  const list2 = strArr[1].split(',').map(Number);

  const set1 = new Set(list1);
  const intersection = list2.filter(num => set1.has(num));

  if (intersection.length === 0) return "false";

  const outputStr = intersection.join(',');
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

// console.log(ArrayChallenge(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
