function k(array){
    //PREP
 //P: object, with a url and text proptie
 //R: string
 //E: [] return a empty string
 //: [{
  //      url:"http://www.google.com",
  //      text:"10^100"
 //   }]
  // return "<a href=\"http://www.google.com\">10^100</a>"
 //P: if check for empty string, then use backticks to make the string that is in anchor tags
  if(menuItems.length === 0){
    return ''
  }else{
    
return menuItems.map(({url, text}) => `<a href="${ url }">${ text }</a>`).join('');
   
    }}