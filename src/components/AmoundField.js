import { useDispatch } from "react-redux";
import { amountChange } from "../store/rates";

export function AmoundField({amount}) {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch (amountChange( e.target.value))
  } 
  return (
    <form className = "ExchangeRate-form">
       <input
         aria-label = "Amount"
         className = "ExchangeRate-form"
         type = "text"
         value = {amount}
         onChange = {onChange}
       />
    </form>
  );
}