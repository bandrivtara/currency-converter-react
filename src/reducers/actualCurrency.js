const initialState = {
  actualCurrencyAmount: 25
}

const actualCurrency = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENCY_AMOUNT':
      return {
        ...state, 
          actualCurrencyAmount: action.value
        
      }
    default:
      return state
  }
}

export default actualCurrency;