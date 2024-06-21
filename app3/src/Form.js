import React, { Component } from 'react'
export default class Form extends Component {
  render() {
    return (
      <div>
         <center>
                    <table border={3} cellPadding={10}>
                        <tr>
                            <td rowSpan={4}>{this.props.sr}</td>
                            <td>Name:</td>
                            <td>{this.props.name}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{this.props.age}</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>{this.props.no}</td>
                        </tr>
                        <tr>
                            <td>Image:</td>
                            <td><img src={this.props.img } alt='img'></img></td>
                        </tr>
                    </table>
                </center>
      </div>
    )
  }
}
