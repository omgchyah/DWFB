const numberIndexes = 6;

let allLoterryNumbers = [];

function generateLotteryNumbers() {
    let lotteryNumbers = [];

    for (let i = 0; i < numberIndexes; i++) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;

    if (lotteryNumbers.indexOf([i]) === -1) {
            lotteryNumbers.push(randomNumber);
        }
    }

    return lotteryNumbers;
}

function saveLotteryNumbers(array = []) {

    allLoterryNumbers.push(array);

    return allLoterryNumbers;

}

let userOption = "";

while (userOption !== "4") {

    let userOption = prompt(`Choose an option:
    1. Start a new game and save my lottery numbers.
    2. Show previous lottery numbers.
    3. Start a new game and delete previous lottery numbers.
    4. Quit.`);

    switch (userOption) {
        case "1":
            let newLotteryNumbers = generateLotteryNumbers();
            console.log("You new lottery numbers are: " + newLotteryNumbers);
            saveLotteryNumbers(newLotteryNumbers);            
            break;
        case 2:
            let allLotteryNumbers = saveLotteryNumbers();
            console.log("All your lottery numbers are: " + allLotteryNumbers) 
            break;
        case 3:
            
            break;
        default:
            console.log("Unvalid option.");
            break;
    }
} 

console.log("Goodbye!");
