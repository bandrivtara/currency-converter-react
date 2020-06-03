import React from 'react'

const CurrencyDefinition = ({ actualCurrencyAmount, changeCurrencyAmount }) => {
    return (
        <div className="currencyDefinition">
            <p>1 EURO = <input type="text" value={actualCurrencyAmount} onChange={changeCurrencyAmount} /> PLN</p>
        </div>
    )
}

export default CurrencyDefinition
