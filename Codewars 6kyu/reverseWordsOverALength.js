// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test"        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }