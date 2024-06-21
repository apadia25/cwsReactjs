// import React from 'react';
// import { useState } from 'react';

// export default function CurrencyCalculator() {
//     const [currency,setCurrency]=useState("usd");
//     const [amount,setAmount]=useState("");
//     const [inr,setInr]=useState("");

//     const Currencychange=(event)=>{
//       setCurrency(event.target.value);
//     }
//     const Amountchange=(event)=>{
//       setAmount(event.target.value);
//     }
//     const handleCalculate=(event)=>{
//       event.preventDefault();
//       if(currency=="USD"){
//         inr=setInr(amount*82.01); //1usd=82.01inr
//       }
//       else if(currency=="GBP"){
//         setInr(amount*103.64);
//       }
//       else if(currency=="EUR"){
//         setInr(amount*89.46);
//       }

//     }
//   return (
//     <div>
//       <form onSubmit={handleCalculate}>
//       <h1>Currency Calculator</h1>
//         <label>Currency: <select value={currency} onChange={Currencychange}>
//           <option value="USD">USD</option>
//           <option value="GBP">GBP</option>
//           <option value="EUR">EUR</option></select></label><br></br>
//           <label>
//             Amount:<input type='number' value={amount} onChange={Amountchange}/><br></br>

//           </label>
//           <button type='submit'>Convert</button>
//           <p>INR:{inr}</p>
//       </form>
//     </div>
//   )
// }


import React from 'react';
import { useState } from 'react';

export default function CurrencyCalculator() {
    const [currency,setCurrency]=useState("usd");
    const [amount,setAmount]=useState("");
    const [inr,setInr]=useState(0);

    const Currencychange=(event)=>{
      setCurrency(event.target.value);
    }
    const Amountchange=(event)=>{
      setAmount(event.target.value);
    }
    const handleCalculate=(event)=>{
      event.preventDefault();
      let initialvalue=0;
      if(currency==='USD'){
        initialvalue=amount*82.01; //1usd=82.01inr
      }
      else if(currency=="GBP"){
        setInr(amount*103.64);
      }
      else if(currency=="EUR"){
        setInr(amount*89.46);
      }

      setInr(initialvalue.toFixed(3));

    }
  return (
    <div>
      <form>
      <h1>Currency Calculator</h1>
        <label>Currency: <select value={currency} onChange={Currencychange}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option></select></label><br></br>
          <label>
            Amount:<input type='number' value={amount} onChange={Amountchange}/><br></br>

          </label>
          <button type='submit' onClick={handleCalculate}>Convert</button>
<p>INR:{inr}</p>
      </form>
    </div>
  )
}

// 

// import React from 'react';
// import { useState } from 'react';

// export default function CurrencyCalculator() {
//     const [curreny,setCurrency]=useState("usd");
//     const [amount,setAmount]=useState("");
//     const [inr,setInr]=useState("");

//     const Currencychange=(event)=>{
//       setCurrency(event.target.value);
//     }
//     const Amountchange=(event)=>{
//       setAmount(event.target.value);
//     }
//     const handleCalculate=(event)=>{
//       event.preventDefault();
//       if(curreny=='USD'){
//         setInr(amount*82.01); //1usd=82.01inr
//       }
//       else if(curreny=='GBP'){
//         setInr(amount*103.64);
//       }
//       else if(curreny=='EUR'){
//         setInr(amount*89.46);
//       }

//     }
//   return (
//     <div>
//       <h1>Currency Calculator</h1>
//       <form onSubmit={handleCalculate}>
//         <label>Currency: <select value={curreny} onChange={Currencychange}>
//           <option value="USD">USD</option>
//           <option value="GBP">GBP</option>
//           <option value="EUR">EUR</option></select></label><br></br>
//           <label>
//             Amount:<input type='number' value={amount} onChange={Amountchange}/><br></br>

//           </label>
//           <button type='submit'>Convert</button>
//       </form>

// <p>INR:{inr}</p>
//     </div>
//   )
// }