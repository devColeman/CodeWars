// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


function printerError(s) {
    //P: will always be a string that includes only letters
    //R: the returns will be a number that include the max amount of erros followed by the total length of the string
    //E: "abs" => '1/3' 
    //P: let try using a array and with a for statement, and if it include the string increase the total variable
  let totalErrors = 0;
  
 for(let i = 0; i < s.length; i++){
   if(s[i] > 'm'){
     totalErrors += 1
   }
   
 }
   return `${totalErrors}/${s.length}`
}