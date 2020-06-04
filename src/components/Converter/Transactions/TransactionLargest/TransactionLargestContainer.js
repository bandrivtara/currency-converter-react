import React from 'react'
import TransactionLargest from './TransactionLargest';
import { convertToPln } from '../../../../lib/helpers';

const TransactionLargestContainer = ({ transactionsList, actualCurrencyAmount }) => {

    let transactionsEuroAmount = transactionsList.map(elem => elem.euro);
    let largestEuroAmount = Math.max.apply(null, transactionsEuroAmount);

    let currentLargestTransaction = transactionsList
        .filter(elem => elem.euro === largestEuroAmount)
        .map(elem => {
            let plnAmount = convertToPln(actualCurrencyAmount, elem.euro)
            return (
                <li key={elem.id}> <p>{elem.name} {elem.euro} EURO = {plnAmount} PLN</p></li>
            )
        })

    return (
        <TransactionLargest currentLargestTransaction={currentLargestTransaction}/>
    )
}

export default TransactionLargestContainer;
