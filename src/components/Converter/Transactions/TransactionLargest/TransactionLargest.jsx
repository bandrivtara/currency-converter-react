import React from 'react'

const TransactionLargest = ({ transactionsList, actualCurrencyAmount }) => {

    let transactionsEuroAmount = transactionsList.map(elem => elem.euro);
    let largestEuroAmount = Math.max.apply(null, transactionsEuroAmount);
    let currentTransaction = transactionsList.filter(elem => elem.euro === largestEuroAmount);

    

    return (
        <div>
            {currentTransaction.map(elem => {
                let plnAmount = elem.euro * actualCurrencyAmount;
                let roundAmount = plnAmount.toFixed(2);
                plnAmount = Math.round(roundAmount*100)/100;
                return (
                    <li key={elem.id}>{elem.name} {elem.euro} = {plnAmount}</li>
                )
            })}
        </div>
    )
}

export default TransactionLargest
