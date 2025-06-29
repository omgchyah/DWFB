calculateTravelBudget() {
    let userName = "";
    let travelLocation = "";
    let days = 0;
    let costHotel = 0;
    let lodgingCosts = 0;
    const averageMealPrice = 15;
    let foodOption = 0;
    let foodCosts = 0;
    let funCosts = 0;
    let totalCosts = 0;

    userName = prompt("What is your name:\n");

    travelLocation = prompt(`Hello, ${userName}. Congrats on your upcoming trip!
        Do you know where you're going?`);

    days = Number(prompt("How many days are you staying?\n"));

    costHotel = Number(prompt("What's the hotel rate per night in euros?"));

    lodgingCosts = days * costHotel;

    while (foodOption < 1 || foodOption > 4 || isNaN(foodOption)) {
        foodOption = Number(prompt(`How many of the meals are you eating out?:
        1. All of them.
        2. Just lunch and dinner.
        3. Just dinner.
        4. None.\n`));

        switch(foodOption) {
            case 1:
                foodCosts = days * 3 * averageMealPrice;
                break;
            case 2:
                foodCosts = days * 2 * averageMealPrice;
                break;
            case 3:
                foodCosts = days * 1 * averageMealPrice;
                break;
            case 4:
                foodCosts = 0;
                break;
            default:
                console.log("This is not a valid option.");
        }
    }

    funCosts = Number(prompt("What's your ideal average daily budget for entertaiment in euros?"));

    totalCosts = lodgingCosts + foodCosts + funCosts;

    console.log(`${userName}, the total cost for your trip to ${travelLocationlocation} is: ${totalCosts} euros.`)
}

calculateTravelBudget();




