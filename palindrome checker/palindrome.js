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
