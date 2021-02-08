let tasks: string[] = [];

function addTask(task:string):number{

    tasks.push(task);
    console.log("___________New Task Added____________");
    console.log("Task " +task+ " inserted in the list");
    return tasks.length;
}

//c
function listAllTasks():void{
    
    console.log("START: All items in array")
    tasks.forEach(function(task){
        console.log(task);
    })
    console.log("END: All items in array")

}

function deleteTask(task:string):number{

    let index:number = tasks.indexOf(task);//find where
    if(index > -1){//if its in array
        tasks.splice(index,1);//splice removes it
        console.log("_________Task Removed ____________");
        console.log("Task " +task+ " removed from list.");

    }
    return tasks.length;

}

let x :number = addTask(' wake up');
console.log("Number of items in the list" +x);
addTask('sleep');

listAllTasks();

deleteTask('sleep ');
