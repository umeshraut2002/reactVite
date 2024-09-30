import {useId} from 'react';


function InputBox({
    label,
    amount, 
    onAmountChange,
    onCurrencyChange,
    selectCurrency = "USD",
    currenCyOptions = [],
    amountDisable = false,
    currencyDiable = false,

}) {

    const amountInputId = useId();

    return (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="bg-gray-800 p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-white text-sm font-medium mb-2" htmlFor="fromAmount">
          `${label}`
        </label>
        <input
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled = {amountDisable}
        />
        <select className="mt-2 w-full bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled = {currencyDiable}
        >

          {currenCyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
          
        </select>
      </div>

    </div>
  </div>
);  
}