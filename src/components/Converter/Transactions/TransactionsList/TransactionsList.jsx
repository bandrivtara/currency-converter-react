import React from 'react';
import { convertToPln } from '../../../../lib/helpers';

const TransactionsList = ({ transactionsList, actualCurrencyAmount, removeTransaction }) => {
    return (
        <div className="transactionsList">
            <div className={"listTitle"}>
                <span>Nazwa transakcji </span><span>EURO</span> = <span>PLN</span>
            </div>
            <ul>
                {transactionsList.map(elem => {
                    let plnAmount = convertToPln(actualCurrencyAmount, elem.euro)
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
