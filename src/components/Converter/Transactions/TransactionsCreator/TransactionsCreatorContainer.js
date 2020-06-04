import React, { useState } from 'react';
import TransactionsCreator from './TransactionsCreator';

const TransactionsCreatorContainer = ({ addTransaction }) => {
    const [name, setName] = useState('');
    const [euroAmount, setEuroAmount] = useState('');
    const [validator, setValidator] = useState(false)

    const changeEuroAmount = (event) => {
        setEuroAmount(event.target.value);
    }
    const changeName = (event) => {
        setName(event.target.value)
    }

    const createTransaction = (event) => {
        event.preventDefault();
        if (name && euroAmount) {
            addTransaction(name, Number(euroAmount))
            setName('');
            setEuroAmount('');
            setValidator(false)
        } else {
            setValidator(true)
        }
    }

    return (
        <TransactionsCreator
            name={name}
            euroAmount={euroAmount}
            changeName={changeName}
            changeEuroAmount={changeEuroAmount}
            createTransaction={createTransaction}
            validator={validator} />
    )
}

export default TransactionsCreatorContainer;
