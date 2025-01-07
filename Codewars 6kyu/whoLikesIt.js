// []-->  "no one likes this"
// ["Peter"]-->  "Peter likes this"
// ["Jacob", "Alex"]-->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]-->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]-->  "Alex, Jacob and 2 others like this"




function likes(names) {
    // P: given a array with name, or empty array
    // R: return the names given in array if there is any name aka a string
    // E: [] = 'no one like this' ['Bob'] => 'Bob likes this' ['Bob', 'Devin'] => 'Bob and Devin like this'
    // ['Bob', 'Devin', 'Zion'] => 'Bob, Devin and Zion like this' if more than 3 name return
    // the first two name and the amount of other people like this ex:
    // ['Alex', 'Jacob', 'Mark', 'Max'] => 'Alex, Jacob and 2 others like this'
    // P: first 3 are easyish just use a template string and then add the arrray
    // the last one you could hard code the first two array then use lenght minus 2?
    
    
    
    if(names.length === 0){
      return 'no one likes this'
    } else if(names.length === 1){
      return `${names[0]} likes this`
    }else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    }else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else if(names.length >= 4){
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
    
    
    
  }