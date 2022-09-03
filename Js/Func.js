
// ****************************Lexical Scope*********************************************
// function outer(){
//     const numbers = ['1','2','3','4','5']
//     function out(){
//         let alphabets = ['a','b','c','d','e']
//         for (num of numbers){
//             console.log("The numbers are ",num)
//             }
//             function inn(){
//                for (alp of alphabets){
//                 console.log("The alphabets are ",alp.toUpperCase())
//                 }
//         }
//         inn()
//     }
//     out()
// }

// outer()
// *************************************************************************

// const square = function (num){
//     const ans = Math.pow(num,2)
//     return ans;
// }

// console.log(square(3))

// const square = {
//     area(side){
//         return side*side;
//     },
//     perimeter(side){
//         return side*4;
//     }
// }

// console.log(square.area(10))
// console.log(square.perimeter(10))

function factory(min,max){
    return function (num) {
        return num>=min && num <=max;
    }
}


