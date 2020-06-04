import React from 'react'

const CurrencyDefinition = ({ actualCurrencyAmount, changeCurrencyAmount }) => {
    return (
        <div className="currencyDefinition">
            <p>1 EURO = <input type="number" step="0.001" value={actualCurrencyAmount} onChange={changeCurrencyAmount} /> PLN</p>
        </div>
    )
}

export default CurrencyDefinition
