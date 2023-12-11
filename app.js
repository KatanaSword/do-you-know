import readlineSync from "readline-sync";
import chalk from "chalk";
import { scientificFacts, historicalFacts, culturalFacts, socialFacts } from "./database.js";
const log = console.log;
let userTopic;

function greeting() {
    log(chalk.blue.bold.italic("🌟 Welcome to 'Do You Know?'🌟\nUnlock a world of fascinating facts! Ready for a journey of discovery?"));
};
greeting()

function userNameInput() {
    const userName = readlineSync.question(chalk.cyan.bold("Please enter your name: "));
    if(userName === "") {
        log(chalk.bold.bgRed("Error occured, Please enter your name"));
        userNameInput()
    } else {
        log(chalk.bold.bgWhite(`Hello!, ${userName} Let's get started!`));
        selectTopic()
    };
};
userNameInput()

function selectTopic() {
    log(chalk.bold.underline("Select topic"));
    log(`${chalk.green.bold("Science")} ${chalk.yellow.bold("History")} ${chalk.blueBright.bold("Culture")} ${chalk.cyanBright.bold("Social")}`);
    log(`${chalk.bgGray.bold("Press key:")} ${chalk.bold("Science: s History: h Culture: c Social: ss")}`);
    userTopic = readlineSync.question(chalk.cyan.bold("Please enter your topic: "));
    displayFact()
};

function displayFact() {
    if(userTopic === "s") {
        log(chalk.green.bold.underline("Did you know?"));
        const currentIndex = Math.floor(Math.random() * scientificFacts.length);
        log(chalk.green.bold(scientificFacts[currentIndex].fact));
    }
    else if(userTopic === "h") {
        log(chalk.yellow.bold.underline("Did you know?"));
        const currentIndex = Math.floor(Math.random() * historicalFacts.length);
        log(chalk.yellow.bold(historicalFacts[currentIndex].fact));
    }
    else if(userTopic === "c") {
        log(chalk.blueBright.bold.underline("Did you know?"));
        const currentIndex = Math.floor(Math.random() * culturalFacts.length);
        log(chalk.blueBright.bold(culturalFacts[currentIndex].fact));
    }
    else if(userTopic === "ss") {
        log(chalk.cyanBright.bold.underline("Did you know?"));
        const currentIndex = Math.floor(Math.random() * socialFacts.length);
        log(chalk.cyanBright.bold(socialFacts[currentIndex].fact));
    } else {
        log(chalk.bgRed.bold("Error occured, Please enter your topic"));
        selectTopic()
    };
    changeTopicOrExitOrContinueFunc()
};

function changeTopicOrExitOrContinueFunc() {
    const changeTopicOrExitOrContinue = readlineSync.question(`${chalk.magenta.bold.underline("Do you want to change topic or continue or exit [x/y/n]")}${chalk.magenta.bold(":")} `);
    if(changeTopicOrExitOrContinue === "x") {
        selectTopic()
    } else if(changeTopicOrExitOrContinue === "y") {
        displayFact()
    } else if(changeTopicOrExitOrContinue === "n") {
        exit()
    } else {
        log(chalk.bgRed.bold("Error occured, Please enter [x/y/n] to continue"));
        changeTopicOrExitOrContinueFunc()
    };
};

function exit() {
    log(`${"👋"} ${chalk.blue.bold.italic("Thank you for exploring 'Do You Know?'\n!Feel free to return anytime for more fascinating facts. Happy learning!")}`);
};