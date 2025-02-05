// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


function switcheroo(x){
    let f = x.split('')
    f.map((str, i) => {
     
     if(str === 'a'){
       f[i] = 'b'
     }else if(str === 'b'){
      f[i] = 'a'
     }
   })
     return f.join('')
   }