/* "foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK" */


var isAnagram = function(test, original) {
    // P: two different string, the first is the test and the second is the original string
    // R: either true or false
    // E: 'test', 'hello' false, 'cat', 'act' -true
    // P: make the strings into array and compare make sure to sort them
   let k = test.toLowerCase().split('').sort().join('')
   let f = original.toLowerCase().split('').sort().join('')
    
   return f === k ? true: false
  
  };
  