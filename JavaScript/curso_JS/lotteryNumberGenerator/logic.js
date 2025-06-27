const numberIndexes = 6;

let allLotteryNumbers = [];

function generateLotteryNumbers() {
    let lotteryNumbers = [];

    while (lotteryNumbers.length < numberIndexes) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;
    if (!lotteryNumbers.includes(randomNumber)) {
            lotteryNumbers.push(randomNumber);
        }
    }

    return lotteryNumbers;
}

function saveLotteryNumbers(array = []) {
    allLotteryNumbers.push(array);
}

function showAllLotteryNumbers() {

    if (allLotteryNumbers.length === 0) {
        return "You have no saved Games.";
    } else {
        let result= "These are you saved games:\n";
        allLotteryNumbers.forEach((game, index) => {
            result += `Game ${index + 1}: ${game.join(", ")} \n`;
        });
        return result;
    }
}

let userOption = "";

while (userOption !== "4") {
    userOption = prompt(`Choose an option:
    1. Start a new game and save my lottery numbers.
    2. Show previous lottery numbers.
    3. Start a new game and delete previous lottery numbers.
    4. Quit.\n`);

    switch (userOption) {
        case "1":
            const newNumbers = generateLotteryNumbers();
            console.log("Your new lottery numbers are:", newNumbers.join(", "));
            saveLotteryNumbers(newNumbers);         
            break;
        case "2":
            console.log(showAllLotteryNumbers());
            break;
        case "3":
            allLotteryNumbers = [];
            const freshNumbers = generateLotteryNumbers();
            console.log("Your new lottery numbers are:", freshNumbers.join(", "));
            saveLotteryNumbers(freshNumbers);                               
            break;
        case "4":
            console.log("Goodbye!");
            break;
        default:
            console.log("Unvalid option.");
            break;
    }
}