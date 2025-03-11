function findUniq(arr) {
    // P: given a array of integers
    // R: return a integer
    // E: [3,5,6,5,3] => 6
    // P: start by sorting the numbers
    arr.sort((a,b) => a - b)
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
  