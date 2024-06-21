import React, { Component } from 'react'

// const info={
//     width:'50%'
// }
export default class Regclass extends Component {
  render() {
    return (
        <>
    <center>
      <table  border="2" cellSpacing="5px" cellPadding="10px"> 
        <tr><td><b> Name:</b></td>
            <td>{this.props.name}</td>
        </tr>
        <tr><td><b> Age:</b></td>
            <td>{this.props.age}</td>
        </tr>
        <tr><td> <b>Mobile No.:</b></td>
            <td>{this.props.no}</td>
        </tr>
        <tr><td> <b>Image:</b></td>
            <td><img src={this.props.img} alt="Image" style={{width:'50%'}}></img></td>
        </tr>
      </table>
      <br></br>
      </center>
    </>
    )
  }
}
