function findPrimeNumbers() {
    let num1 = 0;
    let num2 = 0;
    let primeNumbers = [];

    for (let i = num1; i <= num2; i++) {
        let isPrime = true;
        if (i > 2) {
            isPrime === true;            
            for(let n = 2; n < i - 1; n++) {
                if(i % n === 0) {
                    isPrime = false;
                }
            }
        if (isPrime === true) {
            primeNumbers.push(i);
        }
        }   
    }

}

function findPrimeNumbers() {
    let num1 = parseInt(prompt("Introduce el número inicial:"));
    let num2 = parseInt(prompt("Introduce el número final:"));
    let primeNumbers = [];

    for (let i = num1; i <= num2; i++) {
        if (i < 2) continue;

        let isPrime = true;

        for (let n = 2; n <= Math.sqrt(i); n++) {
            if (i % n === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeNumbers.push(i);
        }
    }

    console.log("Números primos entre", num1, "y", num2, ":", primeNumbers);
}
