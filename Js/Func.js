
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

// function factory(min,max){
//     return function (num) {
//         return num>=min && num <=max;
//     }
// }

// let hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg(){
//          this.eggCount+=1    
//         return "EGG"
//     }
// }

// hen.name
// hen.eggCount
// hen.layAnEgg()
// hen.layAnEgg()
// hen.eggCount

// function message(msg){
//     try {
//         console.log(msg.toUpperCase());
//     } catch (e) {
//         console.log("Write string only!!!")
//     }
// }
// ****************************ForEach*********************************************
// const movies = [
//     {
//         title: "Bheeshma",
//         rate: "95"
//     },
//     {
//         title: "21Grams",
//         rate: "90"
//     },
//     {
//         title: "Attack",
//         rate: "96"
//     },
//     {
//         title: "Kaduva",
//         rate: "70"
//     },
//     {
//         title: "Thor L&A",
//         rate: "94"
//     },
//     {
//         title: "TopGun",
//         rate: "90"
//     },
//     {
//         title: "JanaGanaMana",
//         rate: "95"
//     },
//     {
//         title: "SpidermanNWH",
//         rate: "100"
//     },
//     {
//         title: "Hridayam",
//         rate: "98"
//     },
//     {
//         title: "K.G.F 2",
//         rate: "99"
//     },
//     {
//         title: "Vikram",
//         rate: "100"
//     }
// ]


//  movies.forEach(function (movie){
//     // console.log("Movies I watched in theaters this year")
//     console.log (`TItle:${movie.title} , Rating:${movie.rate}/100`)
// })

// *************************************************************************

// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, 
// {first: 'Harry', last: 'Potter'},
//  {first: 'Hermione', last: 'Granger'}, 
//  {first: 'Ron', last: 'Weasley'},
//   {first: 'Rubeus', last: 'Hagrid'}, 
//   {first: 'Minerva', last: 'McGonagall'},
//    {first: 'Severus', last: 'Snape'}
// ];


// let firstNames = fullNames.map(function (names){
//     // console.log("[",names.first,"]")
//     return names.first
// })

// console.log(firstNames) 

// ****************************Arrow*********************************************
// let add = function (x,y){
//     return x+y
// }

// const addd = (x,y) => {
//     return x + y
// }

// ****************************Arrow*********************************************

const greet = (msg) => {
    console.log("Hey",msg)
}

console.log(greet("Luna"))
