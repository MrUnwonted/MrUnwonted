// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

// for(let i = 0; i<people.length; i++){
//     // const peoples = people[i].toUpperCase()
//     console.log(people[i].toUpperCase())
//  }


// const seatingChart = [
//     ['Kris', 'Eri', 'Nam'],
//     ['Geo', 'Juan', 'Anto', 'Kev'],
//     ['Yum', 'Sak', 'Jack', 'Erik']
// ]

// for (let i = 0; i<seatingChart.length; i++){
//     // console.log(seatingChart[i])
//     const row = seatingChart[i];
//     console.log(`Row #${i+1}`)
//     for(let j= 0; j<row.length; j++){
//         console.log(row[j])
//     }
// }

// let input = prompt("Hey, Say something!")
// while(true){
//     input = prompt(input);
//     if (input.toLowerCase() === "stop coopying me") ; break;
// }
// console.log("OK YOU WIN!!!")

// const numbers = [1,2,3,4,5,6,7,8,9];

// for(let num of numbers){
//     let sqr = num*num
//     console.log(num)
//     num++
// }

// const seatingChart = [
//     ['Kris', 'Eri', 'Nam'],
//     ['Geo', 'Juan', 'Anto', 'Kev'],
//     ['Yum', 'Sak', 'Jack', 'Erik']
// ]

// for(let row of seatingChart){
//     for(let student of row){
//         console.log(student)
//     }
// }

// function isSnakeEyes(num1,num2){
//     if(num1 === 1 && num2 === 1){
//         console.log("Snake Eyes")
//     }else {
//         console.log("Not Snake Eyes")
        
//     }
//     // return isSnakeEyes;
// }

// let arr = [num1,num2,num3]
// *************************************************************************
// let num1,num2,num3
// function lastElement(num1,num2,num3){
//     let tot = num1+num2+num
//     if(tot === -1){
//         return null
//     }else {
//         return num3 
//     }
// }
// *************************************************************************

// function capitalize(arg){
//     let val = arg.charAt(0).toUpperCase()
//     let rest = arg.slice(1)
//     const tot = val + rest
//     return tot
// }

// capitalize("elephent")

// // DEFINE YOUR FUNCTION BELOW:
// function returnDay(day){
//     // if(day <1 || day >7){
//     //     return null
//     // }else {
//     //  
//     switch(day) {
//   case 1:
//     return 'Monday'
//     break;
//   case 2:
//     return 'Tuesday'
//     break;
//   case 3:
//     return 'Wednesday'
//     break;
//   case 4:
//     return 'Thursday'
//     break;
//   case 5:
//     return 'Friday'
//     break;
//   case 6:
//     return 'Saturday'
//     break;
//   case 7:
//     return 'Sunday'
//     break;
//   default:
//     return null
// }
// }

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