import readlineSync from "readline-sync";
import chalk from "chalk";
import { scientificFacts, historicalFacts, culturalFacts, socialFacts } from "./database.js";
const log = console.log;
let userTopic;

function greeting() {
    log(chalk.blue.bold.italic("🌟 Welcome to 'Do You Know?'🌟\nUnlock a world of fascinating facts! Ready for a journey of discovery?"));
    userNameInput()
};
greeting()

function userNameInput() {
    const userName = readlineSync.question(chalk.cyan.bold("Please enter your name: "));
    if(!userName || !isNaN(userName)) {
        log(chalk.bold.bgRed("Error occured, Please enter your name"));
        userNameInput()
    } else {
        log(chalk.bold.bgWhite(`Hello!, ${userName} Let's get started!`));
        selectTopic()
    };
};

function selectTopic() {
    log(chalk.bold.underline("Select topic"));
    log(`${chalk.green.bold("Science")} ${chalk.yellow.bold("History")} ${chalk.blueBright.bold("Culture")} ${chalk.cyanBright.bold("Social")}`);
    log(`${chalk.bgGray.bold("Press key:")} ${chalk.bold("Science: s History: h Culture: c Social: ss")}`);
    userTopic = readlineSync.question(chalk.cyan.bold("Please enter your topic: "));
    displayFact()
};

function displayFact() {
    let currentIndex,
        randomFact;
    switch(userTopic) {
        case "s":
            log(chalk.green.bold.underline("Did you know?"));
            currentIndex = Math.floor(Math.random() * scientificFacts.length);
            randomFact = scientificFacts[currentIndex].fact;
            log(chalk.green.bold(randomFact));
            break;
        case "h":
            log(chalk.yellow.bold.underline("Did you know?"));
            currentIndex = Math.floor(Math.random() * historicalFacts.length);
            randomFact = historicalFacts[currentIndex].fact;
            log(chalk.yellow.bold(randomFact));
            break;
        case "c":
            log(chalk.blueBright.bold.underline("Did you know?"));
            currentIndex = Math.floor(Math.random() * culturalFacts.length);
            randomFact = culturalFacts[currentIndex].fact;
            log(chalk.blueBright.bold(randomFact));
            break;
        case "ss":
            log(chalk.cyanBright.bold.underline("Did you know?"));
            currentIndex = Math.floor(Math.random() * socialFacts.length);
            randomFact = socialFacts[currentIndex].fact;
            log(chalk.cyanBright.bold(randomFact));
            break;
        default:
            log(chalk.bgRed.bold("Error occured, Please enter your topic"));
            selectTopic()
    };
    changeTopicOrExitOrContinueFunc()
};

function changeTopicOrExitOrContinueFunc() {
    const changeTopicOrExitOrContinue = readlineSync.question(`${chalk.magenta.bold.underline("Do you want to change topic or continue or exit [x/y/n]")}${chalk.magenta.bold(":")} `);
    switch(changeTopicOrExitOrContinue) {
        case "x":
            selectTopic()
            break;
        case "y":
            displayFact()
            break;
        case "n":
            exit()
            break;
        default:
            log(chalk.bgRed.bold("Error occured, Please enter [x/y/n] to continue"));
            changeTopicOrExitOrContinueFunc()
    };
};

function exit() {
    log(`${"👋"} ${chalk.blue.bold.italic("Thank you for exploring 'Do You Know?'\n!Feel free to return anytime for more fascinating facts. Happy learning!")}`);
};