/* [1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1] */


function minMax(arr){
    let k = arr.sort((a,b ) => a - b)
    return [k[0], k[k.length -1]]
  }