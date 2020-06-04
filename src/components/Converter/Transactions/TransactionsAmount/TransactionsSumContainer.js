import React from 'react'
import TransactionsSum from './TransactionsSum';
import { convertToPln } from '../../../../lib/helpers';

const TransactionsSumContainer = ({ transactionsList, actualCurrencyAmount }) => {
    
    let transactionsEuroAmount = transactionsList.map(elem => elem.euro);
    let sumEuro = transactionsEuroAmount.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    let sumPln = convertToPln(actualCurrencyAmount, sumEuro)

    let sumTransactions = transactionsList.length;

    return (
        <TransactionsSum
            sumTransactions={sumTransactions}
            sumEuro={sumEuro}
            sumPln={sumPln} />
    )
}

export default TransactionsSumContainer;
