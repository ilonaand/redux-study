const initialState = {
  amount: '9.99',
  currencyCode: "EUR",
}

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case AMOUNT_CHANGED: 
      return {...state, amount: action.payload};
    case CURRENCY_CODE_CHANGED:
      return {...state, currencyCode: action.payload};
    default: 
      return state;
  }  
}

//useselector
export const getAmount = state => state.rates.amount;
export const getCurrencyCode = state => state.rates.currencyCode;

//actiontypes

export const AMOUNT_CHANGED = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGED = "rates/currencyCodeChanged";

//actions

export const amountChange = amount => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});

export const currencyCodeChange = code => ({
  type: CURRENCY_CODE_CHANGED,
  payload: code,
})