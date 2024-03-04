import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "string",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "number",
        name: "age",
        message: "what is your age?"
    },
    {
        type: "confirm",
        name: "isMarried",
        message: "Are you married?",
    }
]);
console.log(`${user.name} your age is ${user.age}, are you Married ${user.isMarried}.`);
