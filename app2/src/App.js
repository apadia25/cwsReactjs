import logo from './logo.svg';
import './App.css';
import App3 from './App3';
import App4 from './App4';
import App2 from './App2';
import App1 from './App1';

function App() {
  return (
    <>
    <center>
      <h1 className='a1'><u>using Functional Components</u></h1><br></br><hr></hr>
      <h3>Let a=5 & b=10 and thier Arithmetic Operations:</h3>
      <table border={1} cellPadding={5} className='a'>
        <tr>
          <td><App2 /></td>
          <td><App3 /></td>
        </tr>
        <tr>
          <td><App1 /></td>
          <td><App4 /></td>
        </tr></table>
        <hr></hr></center></>
  );
}

export default App;
