import { AmoundField } from "./AmoundField";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { RateTable } from "./RateTable";
import { useState,  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrencyCode, getAmount, getCurrencyData, currencyCodeChange} from "../store/rates";

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export const ExchangeRate = () => {
 // const [amount, setAmount] = useState('1.5');
// const [currencyCode, setCurrencyCode] = useState('USD');
 // const [currencyData, setCurrencyData] = useState({USD: 1.0});
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);

  useEffect(() => 
    dispatch(currencyCodeChange(currencyCode))
    , []
  ) 

  // const handleCurrencyCode = useCallback(
  //   (e) => setCurrencyCode(e.target.value),
  //   []
  // );

  /*const  handleAmountChange = useCallback(
    (e) => setAmount(e.target.value),
    []
  )*/

  return(
    <>
    <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "} 
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
    </section>
    <section>
      <AmoundField amount = {amount} />
    </section>
    <section>
      <RateTable currencyData={currencyData} amount={amount} />
    </section> 
    </>
  )
}