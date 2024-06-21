import React from 'react';
import './App.css';
import PropsTypes from 'react';

export default function Form(props) {
    return (
        <>
            <div>
                <center>
                    <fieldset>
                        <table cellPadding={5}>
                            <tr>
                                <td rowSpan={7}>{props.sr}</td>
                                <td>Image:</td>
                                <td><img src={props.img} alt='img' width={40} height={40}></img></td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>{props.name}</td>
                            </tr>
                            <tr>
                                <td>Date of Birth:</td>
                                <td>{props.dob}</td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td>{props.age}</td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td>{props.gender}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{props.email}</td>
                            </tr>
                        </table></fieldset></center> </div>
        </>

    );


    }
    Form.propsTypes={
        name:PropsTypes.string,
        age:PropsTypes.number
    }

    Form.defaultProps={
        name:"Ap",
        age:"19"
    }

