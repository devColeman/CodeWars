function getFirstPython(list) {
    // P: given a array of objects
    // R: return the first dev that is a python developer
    // E: a array withou any python dev needs to return a string if
    // there is a dev then return a template literal
    // P: use find to get the first dev
     
     let a = list.find((word) => word.language == 'Python' )
     return a != undefined ? `${a.firstName}, ${a.country}` : "There will be no Python developers" ;
   }