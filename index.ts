#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

async function main() {
    let ask = await inquirer.prompt({
        type: "number",
        message: "Please set timer in seconds",
        name: "seconds",
        validate:(input)=>{
            if(isNaN(input)){
                return "Please enter a valid number"
            }
            else if(input>60){
                return "Seconds must be in 60"
            }
            else{
                return true
            }
        }
    });

    const timerDuration = ask.seconds;

    function startTime(val:number) {
        let intTime = new Date().setSeconds(new Date().getSeconds()+ timerDuration)
        let intervalTime = new Date(intTime)
        setInterval ((()=>{
            const currentTime =new Date()
            let timeDiff = differenceInSeconds(intervalTime, currentTime)

            if (timeDiff<=0) {
                console.log("Timer has expired!");
                process.exit()
            }

        let min = Math.floor((timeDiff)%(3600*24)/3600)
        let sec = Math.floor((timeDiff)%60)

        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
        
        }),1000)
    }

    startTime(timerDuration)
}

main();
 