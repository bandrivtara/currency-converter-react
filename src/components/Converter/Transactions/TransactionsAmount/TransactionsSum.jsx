import React from 'react'

const TransactionsSum = ({ transactionsList, actualCurrencyAmount }) => {


    let transactionsEuroAmount = transactionsList.map(elem => elem.euro);
    let sumEuro = transactionsEuroAmount.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    
    let sumPln = sumEuro * actualCurrencyAmount;
    let roundAmount = sumPln.toFixed(2);
    sumPln = Math.round(roundAmount * 100) / 100;


    return (
        <div>
            Transactions: {transactionsEuroAmount.length}
            Sum Euro: {sumEuro}
            Sum Pln: {sumPln}
        </div>
    )
}

export default TransactionsSum;
