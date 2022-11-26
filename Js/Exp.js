// let n=prompt("Enter a number")
// let result = ""
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
        
//         result += '1'   
//     }
//      result += "\n"
// }

// console.log(result)
 
  // *************************************************************************
// ABCDEFG
// AGBFCED      

// let value = "ABCDEFG"
// let ans = "", res = "", val = ""

// for(let i = 0; i<4; i++){
//         if(i===3){
//                 break;
//         }else{
//         val = value.charAt(i)
//          res = value.charAt(value.length-(i+1))
//             ans += (val + res)}
//         //     console.log(`[${ans}] `)
// }

// console.log(`[${ans}D] `)

// *************************************************************************

// 1,10,101,1010

let n = parseInt(prompt("Enter a number"))
let res = ""

for(let i=1;i<=n;i++){
  for(let j=0;j<i;j++){
    if(j%2 === 0){
    // res += "*"
    res += "1"
  }else{
    res += "0"
  }
}
  res += "\n"
}

console.log(res)