import React from 'react'

const TransactionLargest = ({ currentLargestTransaction }) => {

    return (
        <div className="transactionLargest">
            <h3>Transakcja o największej kwocie</h3>
            <ul>{currentLargestTransaction}</ul>
        </div>
    )
}

export default TransactionLargest;
