const letter = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'                                      
];


function rot13(str) {
  let accumulator = '';

  for (let x = 0; x < str.length; x++) {
    const char = str[x];
    const aLetter = letter.includes(char);
    if (aLetter) {
      const charValue = letter.findIndex((c) => c === char);
      accumulator += letter[charValue + 13] || letter[charValue - 13];
    } else {
      accumulator+= char;
    }
  }
  return accumulator;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
