function findPrimeNumbers() {
    let primeNumbers = [];

    let num1 = parseInt(prompt("Escribe dos números enteros para saber cuántos números primos están contenidos. Ingrese primer número: "));
    
    while(isNaN(num1)) {
        num1 = parseInt(prompt("Entrada no válida. Ingrese primer número: "));        
    }

    let num2 = parseInt(prompt("Ingrese segundo número: "));

    while(isNaN(num2)) {
        num2 = parseInt(prompt("Entrada no válida. Ingrese segundo número: "));  
    }

    while (num2 <= num1) {
        num2 = parseInt(prompt("Segundo número debe ser mayor al primero. Ingrese segundo número: "));
    }

    for (let i = num1; i <= num2; i++) {
        if (i < 2) {
            continue;
        }

        let isPrime = true;
        let n = 2;

        while (n <= Math.sqrt(i) && isPrime) {
            if (i % n === 0) {
                isPrime = false;                
            }
            n++;
        }
        if(isPrime) {
            primeNumbers.push(i);  
        }  
    }

    alert(`Números primos entre ${num1} y ${num2}: ${primeNumbers.join(", ")}`);
    return primeNumbers;

}

console.log(findPrimeNumbers());


