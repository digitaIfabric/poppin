// Conditions
// two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase

function calcBottles(INV) {
    var minBottles = Math.floor(INV / 2);
    var currentBottles = minBottles;
    var empties = 0;
    var caps = 0;

    while(true) {
        if (currentBottles > 0) {
            empties += currentBottles;
            caps += currentBottles;
            currentBottles = 0;
        } else {
            currentBottles = Math.floor(empties / 2) + Math.floor(caps / 4);
            empties = Math.floor(empties % 2);
            caps = Math.floor(caps % 4);
        }

        minBottles += currentBottles;

        if (currentBottles == 0 && (currentBottles + empties) < 2 && (currentBottles + caps) < 4) break;
    }

    console.log("TOTAL BOTTLES: " + minBottles);
    console.log("REMAINING BOTTLES: " + empties);
    console.log("REMAINING CAPS: " + caps);
    console.log("TOTAL EARNED:");
    console.log("BOTTLES: " + Math.floor(minBottles / 2));
    console.log("CAPS: " + Math.floor(minBottles / 4));

    return minBottles;
}

calcBottles(30);