var ids = require('short-id');

const initialState = {
  transactionsList: [
    { id: 1, name: 'First', euro: 25 },
    { id: 2, name: 'Second', euro: 2 },
    { id: 3, name: 'Third', euro: 11 },
  ]
}

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactionsList: [
          ...state.transactionsList,
          {
            id: ids.generate(),
            name: action.name,
            euro: action.euroAmount
          }
        ]
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactionsList:
          state.transactionsList.filter((transaction) => transaction.id !== action.transactionId)
      }
    default:
      return state
  }
}

export default transactions;