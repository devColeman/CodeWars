// fizzbuzz(3) -->  [1, 2, "Fizz"]



// Return an array
function fizzbuzz(n)
{
// P: given a number that will never be less then 1, will always be a number
// R: return a array with fizzbuzz instead of just printing it to the console
// E: fizzbuzz(3) -->  [1, 2, "Fizz"], fizzbuzz(1) => [1]
// P: probally use a for loop and the push each item into a empty array the return said array
   let k = []
   
   for(let i = 1; i <= n; i++){
     if(i % 15 === 0){
       k.push("FizzBuzz")
     }else if(i % 3 === 0){
       k.push('Fizz')
     }else if(i % 5 === 0){
       k.push('Buzz')
     }else{
       k.push(i)
     }
     
   }
 return k
  
  
  
}