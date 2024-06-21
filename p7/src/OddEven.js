// import React from 'react';
// import {useState} from 'react';

// const OddEven =() => {
//     const [number,setNumber]=useState(" ");

//     const change = (event) => {
//         setNumber(event.target.value);
//     }
//     const check=()=>{
//         if(number%2==0)
//         return (
//             <h1>even</h1>
//         )
//     }
//   return (
//     <>
//     <center>
//         <fieldset>
//             Enter any number:<input type='number' value={number} onChange={change}></input><br></br>
//             <button type='submit' onClick={check}>Check</button>
//         </fieldset>
//     </center>

      
//     </>
//   )
// }
// export default OddEven;




import React from 'react';
import './App.css';


export default function OddEven(props) {
    var number;
    const n=number%2;

  return (
    <>
    <center><br></br><br></br>
        <fieldset>
            <h2>Number:{props.no}</h2>
            <h2>{n==0?<h2>{props.no} is Even</h2>: <h2>{props.no} is Odd</h2>}</h2>
        </fieldset>
    </center>
      
    </>
  )
}
