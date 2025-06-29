function calculateBMI() {
    let weight = 0;
    let height = 0;
    const range = ["Desnutrición", "Normalidad", "Sobrepeso", "Obesidad"];

    weight = Number(prompt("Ingrese su peso en kilogramos:"));
    while (isNaN(weight) || weight <= 0) {
        weight = Number(prompt("Por favor, ingrese un peso válido mayor a 0:"));
    }

    height = Number(prompt("Ingrese su altura en metros:"));
    while (isNaN(height) || height <= 0) {
        weight = Number(prompt("Por favor, ingrese una altura válido mayor a 0:"));
    }

    const BMI = weight / (height ** 2);

    if (BMI < 18.50) {
        console.log(`Tu IMC es de ${BMI.toFixed(2)} y estás en un rango de ${range[0]}.`);
    } else if (BMI < 25) {
        console.log(`Tu IMC es de ${BMI.toFixed(2)} y estás en un rango de ${range[1]}.`);
    } else if (BMI < 30)  {
        console.log(`Tu IMC es de ${BMI.toFixed(2)} y estás en un rango de ${range[2]}.`);
    } else {
        console.log(`Tu IMC es de ${BMI.toFixed(2)} y estás en un rango de ${range[3]}.`);
    }
}

calculateBMI();