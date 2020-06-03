const initialState = {
  actualCurrencyAmount: 4.41
}

const currency = (state = initialState, action) => {
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

export default currency;