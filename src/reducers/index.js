import { combineReducers } from 'redux';
import transactions from './transactions';
import currency from './currency';

export default combineReducers({
    currency,
    transactions,
})