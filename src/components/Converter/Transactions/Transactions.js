import React from 'react';
import { connect } from 'react-redux';
import TransactionsCreatorContainer from './TransactionsCreator/TransactionsCreatorContainer';
import TransactionsListContainer from './TransactionsList/TransactionsListContainer';
import TransactionsSumContainer from './TransactionsAmount/TransactionsSumContainer';
import TransactionLargestContainer from './TransactionLargest/TransactionLargestContainer';
import { addTransaction, deleteTransaction } from '../../../actions';

const Transactions = ({ transactionsList, actualCurrencyAmount, addTransaction, deleteTransaction }) => {
    return (
        <div className="transactions">
            <TransactionsCreatorContainer
                addTransaction={addTransaction} />
            <TransactionsListContainer
                transactionsList={transactionsList}
                actualCurrencyAmount={actualCurrencyAmount}
                deleteTransaction={deleteTransaction} />
            <TransactionsSumContainer
                transactionsList={transactionsList}
                actualCurrencyAmount={actualCurrencyAmount} />
            <TransactionLargestContainer
                transactionsList={transactionsList} 
                actualCurrencyAmount={actualCurrencyAmount} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        actualCurrencyAmount: state.currency.actualCurrencyAmount,
        transactionsList: state.transactions.transactionsList,
    }
}

export default connect(mapStateToProps, { addTransaction, deleteTransaction })(Transactions);
