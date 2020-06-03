import React from 'react'
import TransactionsSum from './TransactionsSum';

const TransactionsSumContainer = ({ transactionsList, actualCurrencyAmount }) => {


    let transactionsEuroAmount = transactionsList.map(elem => elem.euro);
    let sumEuro = transactionsEuroAmount.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    let sumPln = sumEuro * actualCurrencyAmount;
    let roundAmount = sumPln.toFixed(2);
    sumPln = Math.round(roundAmount * 100) / 100;

    let sumTransactions = transactionsList.length;

    return (
        <TransactionsSum
            sumTransactions={sumTransactions}
            sumEuro={sumEuro}
            sumPln={sumPln} />
    )
}

export default TransactionsSumContainer;
