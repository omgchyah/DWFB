function calculateFinalPrice() {
    let originalPrice = 0;
    let discountRate = 0;

    originalPrice = Number(prompt("What the original price of your product?:"));
    while (isNaN(originalPrice) || originalPrice < 0) {
        originalPrice = Number(prompt("Please, input a valid number higher than 0:"))
    }

    discountRate = Number(prompt("What's the discount rate?"));
        while (isNaN(discountRate) || discountRate < 0 || discountRate > 100) {
        discountRate = Number(prompt("Please, input a valid number higher than 0:"))
    }

    const finalPrice = originalPrice - (originalPrice * discountRate / 100);

    console.log(`Final price: ${finalPrice}€.`);
}

calculateFinalPrice();