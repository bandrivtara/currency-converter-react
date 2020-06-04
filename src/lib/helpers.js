export const convertToPln = (amount, euro) => {
    let plnAmount = euro * amount;
    let roundAmount = plnAmount.toFixed(2);
    plnAmount = Math.round(roundAmount * 100) / 100;
    return plnAmount
}
