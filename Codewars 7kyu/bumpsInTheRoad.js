// "n" => "Woohoo!")
// "__nn_nnnn__n_n___n____nn__nnn" => "Woohoo!"
// "nnn_n__n_n___nnnnn___n__nnn__" => "Woohoo!"
// "_nnnnnnn_n__n______nn__nn_nnn" => "Car Dead"
// "______n___n_") => "Woohoo!"


function bump(x){
    // P:given a string will always be a string
    // R: return if you can make it home be returning a string either 'Woohoo!' or 'Car Dead'
    // depending on if the there is 15 or less bumps of n's
    // E: _ is a flat road and n is a bump
    // 'nn' on 2 bumps so the car makes it home 
    // P: remove all the _ then count the n? im thinking to replaceAll the n with 1 then spliting by _
    //   let l
    //   l = x.replaceAll('n', 1).replaceAll('_', '')
    //   l = l.split('').reduce((acc, curr) => acc + Number(curr), 0)
    x = x.split('')
    let k = x.filter((word) => word === 'n')
      
      if(k.length <= 15){
        return 'Woohoo!'
      }else{
        return 'Car Dead'
      }
      
    }