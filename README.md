# fcc-javascript-algorithms-and-data-structures
5 Projects I did through the FreeCodeCamp.org - JavaScript Algorithms and Data Structures course

## Palindrome Checker
I learned how to create a function that checks if a string is a palindrome by creating a reverse string of the original string and setting them equal to each other. 
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
