function calculateCircumference(side) {
  let area = side ** 2;
  let perimeter = side * 4;

  return `Side: ${side}. Area: ${area}. Petimeter: ${perimeter}.`;
}

console.log(calculateCircumference(40));