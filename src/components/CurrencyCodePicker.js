import { useDispatch } from "react-redux";
import { currencyCodeChange } from "../store/rates";

export function CurrencyCodePicker(
  { 
    supportedCurrencies,
    currencyCode
  }
) {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(currencyCodeChange(e.target.value))
  }
  return(
    <select value={currencyCode} onChange={onChange} className="currencyCode"> 
      { supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      )) }
    </select>
  );
}