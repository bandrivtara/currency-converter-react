import React from 'react'

const TransactionsList = ({ transactionsList, actualCurrencyAmount, removeTransaction }) => {
    return (
        <div>
            {transactionsList.map(elem => {
                let plnAmount = elem.euro * actualCurrencyAmount;
                let roundAmount = plnAmount.toFixed(2);
                plnAmount = Math.round(roundAmount*100)/100;
                return (
                    <li key={elem.id}>{elem.name} {elem.euro} = {plnAmount}
                        <button onClick={() => { removeTransaction(elem.id) }}>Del</button>
                    </li>)
            })}
        </div>
    )
}

export default TransactionsList
