function calculateDogAge() {
    let dogAge = 0;
    const inHumanYears = 7;
    let dogHumanAge = 0;

    dogAge = Number(prompt("Hello, how old is your dog in years? 🐶"));

    while (isNaN(dogAge) || (dogAge !== null)) {
        dogAge = prompt("Sorry, that's not a valid number. Enter a valid age:");
    }

    dogHumanAge = dogAge * inHumanYears;

    if (dogAge > 25) {
        console.log("Your dog is dead! Sorry! 😭");
    } else if (dogAge < 1) {
        console.log("Your dog hasn't been born yet! 🧐")
    } else {
        console.log(`Your dog is ${dogHumanAge} years old in human years! 🐶❤️`)
    }
}

calculateDogAge();
