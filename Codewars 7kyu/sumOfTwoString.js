function longest(s1, s2) {
    // prep
    //P: always given 2 strings, only ever strings
    //R: a new str where the two str are add total and sorted without any doubles
    //E: s1="hg", s2="ba" === "abhg"
    //P: use a set of the two string then return the str sorted
   let k = [...(new Set(s1 + s2))].sort().join('')
   return k
   
   }