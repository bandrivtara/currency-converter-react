import React from 'react'

const TransactionLargest = ({ name, euro, plnAmount }) => {

    return (
        <div className="transactionLargest">
            <h3>Transakcja o największej kwocie</h3>
            <div>
                <p>{name}</p>
                <p>{euro} EURO</p>
                <p>{plnAmount} PLN</p>
            </div>
        </div>
    )
}

export default TransactionLargest;
