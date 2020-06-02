export const setCurrencyAmount = value => ({
  type: 'SET_CURRENCY_AMOUNT',
  value: value
})
export const addTransaction = (name, euroAmount) => ({
  type: 'ADD_TRANSACTION',
  name: name,
  euroAmount: euroAmount
})
export const deleteTransaction = (transactionId) => ({
  type: 'DELETE_TRANSACTION',
  transactionId: transactionId
})


