import exchangeRates from "../lib/raters.json";
const initialState = {
  amount: '9.99',
  currencyCode: "EUR",
  currencyData: {USD: 1.0},
}

export const  getExchangeRates = (base) => exchangeRates[base];

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case AMOUNT_CHANGED: 
      return {...state, amount: action.payload};
    case CURRENCY_CODE_CHANGED:
      return {...state, currencyCode: action.payload};
    case 'rates/receivedCode':
      return {...state, currencyData: action.payload}
    default: 
      return state;
  }  
}

//useselector
export const getAmount = state => state.rates.amount;
export const getCurrencyCode = state => state.rates.currencyCode;
export const getCurrencyData = state => state.rates.currencyData

//actiontypes

export const AMOUNT_CHANGED = 'rates/amountChanged';
export const CURRENCY_CODE_CHANGED = "rates/currencyCodeChanged";

//actions

export const amountChange = amount => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});

export function currencyCodeChange (code ) {
  return function currencyCodechangeThunk (dispath) { 
    dispath ({
    type: CURRENCY_CODE_CHANGED,
    payload: code,
  });
  const rates = getExchangeRates(code);
    dispath (
      {
        type: 'rates/receivedCode',
        payload: rates,
      }
    )
  }
}