import React from 'react';
import App5 from './App5';
import './App.css';

const Form = () => {
  return (
    <div>
  <center><h3>Fill the Form</h3>
    <table>
      <tr>
        <td> <Name /> </td>
        <td rowSpan={4}><App5 /></td>
      </tr>
      <tr>
        <td>Age:<input type='number' placeholder='enter age'></input><br></br></td>
      </tr>
      <tr>
        <td>Email id:<input type='text'  placeholder='enter email'></input><br></br></td>
      </tr>
      <tr>
        <td><Button /></td>
      </tr>
    </table> <hr></hr>
        </center>
    </div>
  )
}


const Name = () => {
  return (
    <div>
      Name:<input type='text' placeholder='enter name'></input><br></br>
    </div>
  )
}

const Button= () => {
  return (
    <div>
      <button type='sumbit'>Submit</button>
    </div>
  )
}


export default Form
