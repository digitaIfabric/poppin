// INV TOT
// 10	15
// 20	35
// 30	55
// 40	75

// two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase
var INV = 10;
var caps = [];
var bottles = [];

function calcBottles(INV) {
    var minBottles = Math.floor(INV / 2);
    var caps = minBottles;
    var bottles = minBottles;
    var redemptionB = Math.floor(bottles / 2);
    var redemptionC = Math.floor(caps / 4);
    var redemption =  redemptionB + redemptionC;
    var left = minBottles - redemption;

    console.log("Bottles redeemed: " + redemption);
    console.log("Bottles left for r: " + left);
    // Trade in one

    return minBottles;

}


console.log(calcBottles(INV));