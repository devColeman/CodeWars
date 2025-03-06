// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
sortme = function( courses ){
    // P: given a array of string
    // R: return the array sort but the yymm then the name
    // E: ["web-1305","site-1305","web-1304","site-1304"] => ["site-1304", "web-1304", "site-1305", "web-1305"]
    // P: first we need to sort by the number that is in the item
    let k = courses.sort((a,b) => {
      
     a=a.split('-')
      console.log(typeof Number(a[1]))
                                  
                                  
                                  }
                        
                        
                        )
    console.log(k)
  }
  