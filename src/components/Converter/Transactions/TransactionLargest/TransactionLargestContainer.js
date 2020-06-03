import React from 'react'
import TransactionLargest from './TransactionLargest';

const TransactionLargestContainer = ({ transactionsList, actualCurrencyAmount }) => {

    let transactionsEuroAmount = transactionsList.map(elem => elem.euro);
    let largestEuroAmount = Math.max.apply(null, transactionsEuroAmount);
    let currentLargestTransaction = transactionsList
        .filter(elem => elem.euro === largestEuroAmount)
        .map(elem => {
            let plnAmount = elem.euro * actualCurrencyAmount;
            let roundAmount = plnAmount.toFixed(2);
            plnAmount = Math.round(roundAmount * 100) / 100;
        console.log(transactionsList.find(elem => elem.euro ===largestEuroAmount))
            return (
                <div>
                    <p>{elem.name}</p>
                    <p>{elem.euro} EURO</p>
                    <p>{plnAmount} PLN</p>
                </div>
            )
        })

    return (
        <TransactionLargest currentLargestTransaction={currentLargestTransaction} />
    )
}

export default TransactionLargestContainer;
