// ['Red', 'Green'] == ['red', 'green']
// [1, 'Green'] == [1, 'green']


function arrayLowerCase(arr) {
  //P: a array with strings and numbers
  //R: return the given array with all lowercase 
  //E: ['HELLO', 'Bye'] => ['hello', 'bye']
  //P: let f = arr.map((word) => word.toLowerCase())
  
  let k = arr.map((k, i) =>{
    
    if(typeof k === "string"){
return k.toLowerCase()
 }
  return k})
    
  
    
    
  return k
}