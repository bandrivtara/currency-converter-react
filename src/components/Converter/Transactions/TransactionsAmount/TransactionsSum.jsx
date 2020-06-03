import React from 'react'

const TransactionsSum = ({ sumTransactions, sumPln, sumEuro }) => {

    return (
        <div className="transactionSum">
            <p>Suma wszystkich transakcji</p>
            <div>Ilość: {sumTransactions}</div>
            <div>EURO: {sumEuro}</div>
            <div>PLN: {sumPln}</div>
        </div>
    )
}

export default TransactionsSum;
