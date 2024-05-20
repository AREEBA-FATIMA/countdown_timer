#! /usr/bin/env node
import inquirer from "inquirer";

async function main() {
    let ask = await inquirer.prompt({
        type: "number",
        message: "Please set timer in seconds",
        name: "seconds"
    });

    const timerDuration = ask.seconds;

    let remainingSeconds = timerDuration;

    const intervalId = setInterval(() => {
        remainingSeconds--;

        if (remainingSeconds <= 0) {
            clearInterval(intervalId);
            console.log("Timer completed!");
        } else {
            console.log(`Time remaining: ${remainingSeconds} seconds`);
        }
    }, 1000);
}

main();
