import { combineReducers } from 'redux';
import transactions from './transactions';
import actualCurrency from './actualCurrency';

export default combineReducers({
    actualCurrency,
    transactions,
})