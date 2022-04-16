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
