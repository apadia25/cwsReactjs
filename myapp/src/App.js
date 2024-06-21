import logo from './logo.svg';
import './App.css';

function App() {
  var a=2;
  var b=3;
  var c=a+b,d=a-b,e=a*b,f=a/b,g=a%b,j=a**b,k=a&b,l=a|b,m=a^b,n=~a;
  return (
   <><br></br><br></br><br></br><br></br><center>
      <fieldset>
   <div className='ap'>
   Let a=2 & b=3<br></br>
   <b><h1><u>Arithmetic Operations</u></h1><br></br></b>
   Addition={a}+{b}={c}<br></br>
   Substraction={a}-{b}={d}<br></br>
   Multiplication={a}*{b}={e}<br></br>
   Division={a}/{b}={f}<br></br>
   Reminder={a}%{b}={g}<br></br>
   Exponential={a}**{b}={j}<br></br><br></br>
   <b><h1><u>Logical Operations</u></h1><br></br></b>
   AND={a}&{b}={k};<br></br>
   OR={a}|{b}={l};<br></br>
   XOR={a}^{b}={m};<br></br>
   NOT=~{a}={n};<br></br>
   </div></fieldset></center>
   </>
  );
}
export default App;
