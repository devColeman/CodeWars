// 'www.codewars.com#about' => 'www.codewars.com'
// 'www.codewars.com/katas/?page=1#about' => 'www.codewars.com/katas/?page=1'
// 'www.codewars.com/katas/' => 'www.codewars.com/katas/'

function removeUrlAnchor(url){
    // P: given a string, always will be a string no need to check for empty or null
    // R: return a str
    // E: anything after the # need to be removed
    // 'www.codewars.com#about' =>'www.codewars.com'
    // P: maybe split the url?
   
     return url.split('#')[0]
     
   }