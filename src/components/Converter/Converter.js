import React from 'react';
import CurrencyDefinitionContainer from './CurrencyDefinition/CurrencyDefinitionContainer';
import Transactions from './Transactions/Transactions';

const Converter = () => {
    return (
        <div>
            <CurrencyDefinitionContainer />
            <Transactions />
        </div>
    )
}

export default Converter;
