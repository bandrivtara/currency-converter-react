import React from 'react';
import { connect } from 'react-redux';
import TransactionsCreatorContainer from './TransactionsCreator/TransactionsCreatorContainer';
import TransactionsListContainer from './TransactionsList/TransactionsListContainer';
import TransactionsSum from './TransactionsAmount/TransactionsSum';
import TransactionLargest from './TransactionLargest/TransactionLargest';
import { addTransaction, deleteTransaction } from '../../../actions';

const Transactions = ({ transactionsList, actualCurrencyAmount, addTransaction, deleteTransaction }) => {
    return (
        <div>
            <TransactionsCreatorContainer
                addTransaction={addTransaction} />
            <TransactionsListContainer
                transactionsList={transactionsList}
                actualCurrencyAmount={actualCurrencyAmount}
                deleteTransaction={deleteTransaction} />
            <TransactionsSum
                transactionsList={transactionsList}
                actualCurrencyAmount={actualCurrencyAmount} />
            <TransactionLargest
                transactionsList={transactionsList} 
                actualCurrencyAmount={actualCurrencyAmount} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        actualCurrencyAmount: state.actualCurrency.actualCurrencyAmount,
        transactionsList: state.transactions.transactionsList,
    }
}

export default connect(mapStateToProps, { addTransaction, deleteTransaction })(Transactions);
