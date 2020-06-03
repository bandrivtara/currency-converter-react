import React from 'react'
import TransactionsList from './TransactionsList'

const TransactionsListContainer = ({ transactionsList, actualCurrencyAmount, deleteTransaction }) => {

    const removeTransaction = (transactionId) => {
        deleteTransaction(transactionId);
    }

    


    return (
        <TransactionsList
            transactionsList={transactionsList}
            actualCurrencyAmount={actualCurrencyAmount}
            removeTransaction={removeTransaction} />
    )
}

export default TransactionsListContainer
