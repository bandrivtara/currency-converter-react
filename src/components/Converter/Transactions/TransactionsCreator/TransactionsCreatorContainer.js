import React, { useState } from 'react';
import TransactionsCreator from './TransactionsCreator';

const TransactionsCreatorContainer = ({ addTransaction }) => {
    const [name, setName] = useState('');
    const [euroAmount, setEuroAmount] = useState('');

    const changeEuroAmount = (event) => {
        setEuroAmount(event.target.value)
    }
    const changeName = (event) => {
        setName(event.target.value)
    }

    const createTransaction = (event) => {
        event.preventDefault();
        addTransaction(name, Number(euroAmount))
        setName('');
        setEuroAmount('');
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
