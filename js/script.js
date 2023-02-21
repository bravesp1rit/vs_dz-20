'use strict';

const litersOfBorsch = 48;

const calculation = function (liters){ 
    const PotatoNeededFor1Liter = 4;
    const averagePotatoWeight = 75;
    const priceOfPotato = 13;
    let calcPotatoNeeded = liters * PotatoNeededFor1Liter;
    let calcKgOfPotatoNeeded = calcPotatoNeeded / (1000 / averagePotatoWeight);
    let calcFinalPrice = Math.ceil(calcKgOfPotatoNeeded * priceOfPotato);
    return calcFinalPrice;
}

console.log(calculation(litersOfBorsch));