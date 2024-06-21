/* eslint-disable no-undef */
//Class Component
// import React, { Component } from 'react'

// export default class Counter extends Component {
//     // state={
//     //     count: 0
//     // }
//     constructor(props) {
//       super(props)
//     this.state = {
//          count: 0
//       } 
//     }
//     onIncrement(){
//         // this.state.count = this.state.count + 1
//         // console.log(this.state.count)
//         this.setState({
//             count: this.state.count+1
//         },()=>{
//             console.log('Callback Value',this.state.count)
//         })
//         //console.log(this.state.count)
//     }
    
// render() {
//     return (
//       <div><center>
//         <h1>Count-{this.state.count}</h1>
//         <button onClick={()=> this.onIncrement()}>Increment</button>
//         </center>
//       </div>
//     )
//   }
// }
import React from 'react';
import  {useState} from 'react';

export default function Counter() {
  const [count,setCount]= useState(0);
  return (
    <>
    <center>
    <div>
      <br></br>
      <h1>Count is {count}</h1>
     <button onClick={()=>setCount(count+1)}>Increment</button>
      </div>
    </center>
    </>
  );
}


