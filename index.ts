#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 +1 );


const answer = await inquirer.prompt([
  {
    name: "UsersguessedNumber",
    type: "number",
    message: "PLEASE GUESS A NUMBER between 1-10",
  },
]);
if (answer.UsersguessedNumber === randomNumber) {
  console.log("congrats! you guessed correct number🎉👏");
} else {
  console.log("you guessed wrong number 😢");
}  
