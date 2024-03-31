import inquirer from "inquirer";

let todos = [];
let condition = true;
let i = 0;

while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add to your To-Do list ?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more ?",
            default: false
        }
    ]);

    todos.push(addTask.todo);
    i++;

    console.log("Your To-Do List:");
    todos.forEach((task, index) => console.log(`${index + 1}. ${task}`));
    condition = addTask.addMore;
}
