function StringChallenge(strArr) {
  const str = strArr[0];
  const numRows = parseInt(strArr[1], 10);

  let outputStr = "";

  if (numRows === 1) {
    outputStr = str;
  } else {
    const rows = Array(numRows).fill('');
    let currentRow = 0;
    let goingDown = false;
    
    for (const char of str) {
      rows[currentRow] += char;
      if (currentRow === 0 || currentRow === numRows - 1) {
        goingDown = !goingDown;
      }
      currentRow += goingDown ? 1 : -1;
    }
    outputStr = rows.join(''); 
  }

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

// console.log(StringChallenge(["cat", "5"]));
