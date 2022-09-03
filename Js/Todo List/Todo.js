let input = prompt("What you like to do")
let toDos = ["Chicken collected", "Litter cleaned"]
while (input !== 'quit' && input !== 'q'){
 
    if(input === "list"){
        console.log("***********")
        for(let i=0; i<toDos.length; i++){
            console.log(`${i}: ${toDos[i]}`)
        }
        console.log("***********")
    } else if (input === "new"){
        let newtoDo = prompt("Ok, What you want to add")
         toDos.push(newtoDo)
        console.log(`${newtoDo} added to list`)
    } else if (input === "delete"){
        let index = parseInt(prompt("Enter the index to delete"))
        if(!Number.isNaN(index)){
            const deleted = toDos.splice(index,1)
            console.log(`Deleted ${deleted[0]}`)
        }
        else (console.log("Unknown index"))
    }

    input = prompt("What you like to do")
}

console.log("Ok, You quit...")