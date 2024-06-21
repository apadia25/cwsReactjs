import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        const { name, age, rollno } = { ...this.props };
        return (
            <><center>
                <h3>Student Details</h3>
                <table>
                    <tr>
                        <td>Name: {this.props.title}{name}</td></tr>
                    <tr><td>Age: {age}</td></tr>
                    <tr><td>Rollno: {rollno}</td></tr>
                </table>
            </center>
            </>
        )
    }
}
