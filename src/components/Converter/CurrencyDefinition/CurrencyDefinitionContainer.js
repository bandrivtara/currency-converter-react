import React from 'react';
import CurrencyDefinition from './CurrencyDefinition';
import { connect } from 'react-redux';
import { setCurrencyAmount } from '../../../actions';


const CurrencyDefinitionContainer = ({ actualCurrencyAmount, setCurrencyAmount }) => {


    const changeCurrencyAmount = (event) => {
        let newCurrencyAmount = event.target.value;
        setCurrencyAmount(newCurrencyAmount);
    }

    return (
        <div>
            <CurrencyDefinition
                actualCurrencyAmount={actualCurrencyAmount}
                changeCurrencyAmount={changeCurrencyAmount} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        actualCurrencyAmount: state.actualCurrency.actualCurrencyAmount
    }
}


export default connect(mapStateToProps, {setCurrencyAmount})(CurrencyDefinitionContainer);