import styles from './About.module.css';
import './About.css';
import App1 from './App1';
import App2 from './App2';
import App4 from './App4';
import App3 from './App3';
import App5 from './App5';

import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div><center>
      <h1 className={styles.primary}><u>using Class Components</u></h1><br></br><hr></hr>
      <h3>Let a=5 & b=10 and thier Arithmetic Operations:</h3>
      <table border={1} cellPadding={7} cellSpacing={2}>
        <tr><td><App2 /></td><td><App1 /></td></tr>
        <tr><td><App3 /></td><td><App4 /></td></tr>
      </table>
      <br></br>
      <hr></hr><br></br>
      <App5 />
      </center>
      </div>
    )
  }
}




// export default function About() {
//   return (
//     <div>
//       {/* <h1 className={styles.fontx}>About page</h1>
//       <h2 className={styles.primary}>About us</h2> */}
//       <h1 className={`${styles.primary} ${styles.fontx}`}>About page</h1>
//       <h1 className={`primary ${styles.fontx}`}>About page</h1>
//       <h1 className={`primary ${styles.primary}`}>About page</h1>
      
//     </div>



// }