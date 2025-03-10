// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
sortme = function( courses ){
  // P: given a array of string
  // R: return the array sort but the yymm then the name
  // E: ["web-1305","site-1305","web-1304","site-1304"] => ["site-1304", "web-1304", "site-1305", "web-1305"]
  // P: first we need to sort by the number that is in the item
 
  
  return courses.sort((a,b) => {
    
    let [nameA, yymmA] = a.split('-')
    let [nameB, yymmB] = b.split('-')

    return yymmA - yymmB || nameA.localeCompare(nameB)
      
    
     
  })}