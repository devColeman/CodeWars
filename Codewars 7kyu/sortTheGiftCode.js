// "abcdef"-- => "abcdef"
// "pqksuvy"-- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"-- => "abcdefghijklmnopqrstuvwxyz"

function sortGiftCode(code){
    return code.split('').sort().join('')
  }