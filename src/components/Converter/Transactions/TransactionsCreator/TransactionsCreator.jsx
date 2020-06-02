import React from 'react'

const TransactionsCreator = ({name, changeName, euroAmount, changeEuroAmount, createTransaction}) => {
    return (
        <form onSubmit={createTransaction}>
            <input type="text" value={name} onChange={changeName} />
            <input type="number" value={euroAmount} onChange={changeEuroAmount} />
            <input type="submit" value="Надіслати" />
        </form>
    )
}

export default TransactionsCreator
