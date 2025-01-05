// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12




function dontGiveMeFive(start, end)
{
  // P: given the first number in a array and the last, will always be a array
  // R: return a array with a count from the start and end without the number 5
  // E: 1,5 => [1, 2, 3, 4] it not a array you return its count of all the numbers
  // 1,5 => 4
  // P: use a for loop use the start for i and end for comparsion then filter out 5? then return the number
  //by using the to string you can check in 5 is included
  let k = 0
  
  for(let i = start; i <= end; i++){
   if(i.toString().includes('5') === false){
    k++
   }
   }
return k
  }

