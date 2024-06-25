// Helper function to calculate area
function calculateArea(length, width) {
    return length * width;
}

// Helper function to calculate tile cost
function calculateTileCost(area, tilePrice) {
    return area * tilePrice;
}

// Main function to calculate total cost
function calculateTotalCost(length, width, tilePrice) {
    let area = calculateArea(length, width);
    let totalCost = calculateTileCost(area, tilePrice);
    return totalCost;
}

// Example usage
let bathroomLength = 10;
let bathroomWidth = 8;
let tilePricePerSqft = 5;

let totalTileCost = calculateTotalCost(bathroomLength, bathroomWidth, tilePricePerSqft);
console.log('Total cost to replace bathroom tiles: $' + totalTileCost);
