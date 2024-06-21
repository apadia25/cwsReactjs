import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import img1 from './ap.jpg';
// import Reg from './Reg';
// import Counter from './Counter';
import Form from './Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* using class component */}
    <Form name="Akshay" age="19" no="9348200914" img={img1} sr="1"/><br></br>
    <Form name="Mayank" age="19" no="9337911904" img={img1} sr="2"/><br></br> 
     
 {/* <Counter /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

       {/* using function
       <center><h1>Participants Info</h1><br></br></center>
    <Reg name="Akshay" age="19" no="9348200914" img={img1} sr="1"/><br></br>
    <Reg name="Mayank" age="19" no="9337911904" img={img1} sr="2"/><br></br> */}


 