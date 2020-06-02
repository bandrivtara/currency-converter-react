import React, { useState } from 'react';
import TransactionsCreator from './TransactionsCreator';

const TransactionsCreatorContainer = ({ addTransaction }) => {
    const [name, setName] = useState(0);
    const [euroAmount, setEuroAmount] = useState(0);

    const changeEuroAmount = (event) => {
        setEuroAmount(event.target.value)
    }
    const changeName = (event) => {
        setName(event.target.value)
    }

    const createTransaction = (event) => {
        event.preventDefault();
        addTransaction(name, Number(euroAmount))
    }

    return (
        <TransactionsCreator
            name={name}
            euroAmount={euroAmount}
            changeName={changeName}
            changeEuroAmount={changeEuroAmount}
            createTransaction={createTransaction} />
    )
}

export default TransactionsCreatorContainer;
