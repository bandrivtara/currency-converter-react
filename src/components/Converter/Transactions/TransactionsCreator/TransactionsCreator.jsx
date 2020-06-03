import React from 'react'

const TransactionsCreator = ({ name, changeName, euroAmount, changeEuroAmount, createTransaction }) => {
    return (
        <form onSubmit={createTransaction} className="transactionsCreator">
            <legend>Dodaj transakcje</legend>
            <div className="inputBox">
                <input type="text" value={name} onChange={changeName} />
                <label className={`placeHolder ${name && "active"}`}>Nazwa transakcji</label>
                <label className={"" && "activeWrong"}>Wpisz poprawną nazwę</label>
            </div>
            <div className="inputBox">
                <input type="text" value={euroAmount} onChange={changeEuroAmount} />
                <label className={`placeHolder ${euroAmount && "active"}`}>Kwota w Euro</label>
                <label className={"" && "activeWrong"}>Wpisz poprawną wartość</label>
            </div>
            <input type="submit" value="Dodaj" />
        </form>
    )
}

export default TransactionsCreator
