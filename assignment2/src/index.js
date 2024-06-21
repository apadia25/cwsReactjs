import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Form';
import a from './image1.jpeg';
import CurrencyCalculator from './CurrencyCalculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <center><h1>Student Registration Form</h1></center>
    <Form  dob="15/02/2004" gender="male" age="1" email="js@rknec.edu" img={a} sr="1"/>
    <Form name="Akshay" dob="14/03/2005" gender="male" age={18} email="ap@gmail.com" img={a} sr="2"/>
    {/* <Form name="mayank" dob="12/02/2007" gender="male" age="19" email="ht@rknec.edu" img={a} sr="3"/>
    <Form name="Aboli" dob="14/5052003" gender="female" age="17" email="ap@gmail.com"   img={a} sr="4"/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




    {/* <App usd="200"/> */}

    // <CurrencyCalculator />