import React from 'react'

const CurrencyDefinition = ({ actualCurrencyAmount, changeCurrencyAmount }) => {
    return (
        <div>
            1 EURO = <input type="text" value={actualCurrencyAmount} onChange={changeCurrencyAmount} /> PLN
        </div>
    )
}

export default CurrencyDefinition
