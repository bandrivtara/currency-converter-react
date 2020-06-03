import React from 'react'

const TransactionsList = ({ transactionsList, actualCurrencyAmount, removeTransaction }) => {
    return (
        <div className="transactionsList">
            <div className={"listTitle"}>
                <span>Nazwa transakcji </span><span>EURO</span> = <span>PLN</span>
            </div>
            <ul>
                {transactionsList.map(elem => {
                    let plnAmount = elem.euro * actualCurrencyAmount;
                    let roundAmount = plnAmount.toFixed(2);
                    plnAmount = Math.round(roundAmount * 100) / 100;

                    return (
                        <li key={elem.id}>
                            <span>{elem.name} </span><span>{elem.euro}</span> = <span>{plnAmount}</span>
                            <button onClick={() => { removeTransaction(elem.id) }}>Usuń</button>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default TransactionsList
