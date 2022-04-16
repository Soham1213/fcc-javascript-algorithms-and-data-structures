# fcc-javascript-algorithms-and-data-structures
5 Projects I did through the FreeCodeCamp.org - JavaScript Algorithms and Data Structures course

I have provided a brief description and the code of each project. They can also be viewed through the folders above. 

## Palindrome Checker
I created a function that checks if a string is a palindrome by creating a reverse string of the original string and setting them equal to each other. 
```javascript
function palindrome(str) {
  const testString = str.toLowerCase().match(/[a-z0-9]/g);

  if (testString.join('') === testString.reverse().join('')){
    return true;
  }
  else {
    return false;
  }
}



palindrome("eye");
```

##Roman Numeral Converter
I created a function that takes a number and converts it into a roman numeral by using a roman numeral table and subtracting each roman symbol from the number. 
```javascript
function convertToRoman(num) {
 const romanTable = {
   M: 1000,
   CM: 900,
   D: 500,
   CD: 400,
   C: 100,
   XC: 90,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1,
 };
 
 let accumulator = '';

 for (const symbol in romanTable) {
   const romanEquals = romanTable[symbol];
   while (romanEquals <= num) {
     num-= romanEquals;
     accumulator+=symbol;
   }
  }
  return accumulator;
}

convertToRoman(36);
```

##Caesars Cipher
I created a ROT13 cipher function that takes a value of a letter and shifts it by 13 places. 
```javascript
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
```

##Telephone Number Validator
Here, I created a function that returns `true` if the passed string resesmbled a U.S. phone number.
```javascript
function telephoneCheck(str) {
  const validNumbers = [
    /1\(\d{3}\)\d{3}-\d{4}/,
    
    /^\d{10}$/,

    /^1 \d{3}-\d{3}-\d{4}$/,
    
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    /^1 \d{3} \d{3} \d{4}$/,

    /^1\d{3}-\d{3}-\d{4}$/,

    /^\d{3}-\d{3}-\d{4}$/,

    /^\(\d{3}\)\d{3}-\d{4}/
  ]
  return validNumbers.some((sample) => sample.test(str));
}

telephoneCheck("555-555-5555");
```

##Cash Register
I created a function that acts like a cash register. It returns if the cash register has enough funds for change. 
```javascript
function checkCashRegister(price, cash, cid) {
  let cashArr = cid.map(e => e[1]*100),
      converted = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000],
      rawChange = ((cash - price)*100),
      cashRegister = [["PENNY", 0],  ["NICKEL", 0],  ["DIME", 0],  ["QUARTER", 0],  ["ONE", 0],  ["FIVE", 0],  ["TEN", 0],  ["TWENTY", 0],  ["ONE HUNDRED", 0]],
      change = {status: "", change: []};
  for (let x = cashArr.length - 1; x >= 0; x--) {
    while(cashArr[x] > 0) {
      if (rawChange - converted[x] >= 0) {
        cashRegister[x][1] += converted[x];
        rawChange -= converted[x];
        cashArr[x] -= converted[x];       
      } else { break; }
    }
    if (rawChange === 0) {break;}
  }
  for (let i = cashRegister.length -1;i >= 0; i--){
    if (cashRegister[i][1] !== 0){
      cashRegister[i][1] = cashRegister[i][1]/100
    }
  }
  if (rawChange !== 0) {
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  }
  else if (rawChange === 0 && JSON.stringify(cashRegister)==JSON.stringify(cid)) {    
    change.status = "CLOSED";
    change.change = cashRegister;
    return change;        
  }
  else {  
    cashRegister = cashRegister.filter(e => e[1] !== 0).reverse();  
    change.status = "OPEN";
    change.change = cashRegister;
    return change;
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
```
