// import inquirer from "inquirer";
// let todos = [];
// let condition = true;
// let i = 0;
// while (condition) {
//     let addTask = await inquirer.prompt([
//         {
//             name: "todo",
//             type: "input",
//             message: "What do you want to add to your To-Do list ?"
//         },
//         {
//             name: "addMore",
//             type: "confirm",
//             message: "Do you want to add more ?",
//             default: false
//         }
//     ]);
//     todos.push(addTask.todo);
//     i++;
//     console.log("Your To-Do List:");
//     todos.forEach((task, index) => console.log(`${index + 1}. ${task}`));
//     condition = addTask.addMore;
// }
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add to your To-Do list?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: false
        }
    ]);
    todos.push(addTask.todo);
    console.log("Your To-Do List:");
    todos.forEach((task, index) => console.log(`${index + 1}. ${task}`));
    let deleteTask = await inquirer.prompt({
        name: "deleteIndex",
        type: "number",
        message: "Enter the number of the task you want to delete (0 to cancel):",
        validate: (input) => {
            if (input < 0 || input > todos.length) {
                return "Please enter a valid task number.";
            }
            return true;
        }
    });
    if (deleteTask.deleteIndex !== 0) {
        todos.splice(deleteTask.deleteIndex - 1, 1);
        console.log("Task deleted successfully.");
    }
    condition = addTask.addMore;
}
