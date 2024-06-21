import React from 'react';
import { useState } from 'react';
import './App.css';

export default function Form(props) {
    const [total, setTotal] = useState(" ")
    const [percentage, setPercentage] = useState(" ")
    const [marks1, setMarks1] = useState(" ")
    const [marks2, setMarks2] = useState(" ")
    const [marks3, setMarks3] = useState(" ")
    const [marks4, setMarks4] = useState(" ")

    const change1 = (event) => {
        setMarks1(event.target.value)
    }
    const change2 = (event) => {
        setMarks2(event.target.value)
    }
    const change3 = (event) => {
        setMarks3(event.target.value)
    }
    const change4 = (event) => {
        setMarks4(event.target.value)
    }
    const Calculate = () => {
        const sum = -(-marks1 - marks2 - marks3 - marks4)
        setTotal(sum)
        setPercentage(sum / 4)
    }
    const changeTotalMarks = (event) => {
        setTotal(event.target.value)
    }
    const changePercentage = (event) => {
        setPercentage(event.target.value)
    }


    return (
        <>
            <div>
                <fieldset>
                    <center>
                        <table>
                            <tr>
                                <th>Name:</th>
                                <td>{props.name}</td>
                            </tr>
                            <tr>
                                <th>Section:</th>
                                <td>{props.sec}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th colSpan={2}><h2>Subject Marks</h2></th>
                            </tr>
                            <tr>
                                <td>1. CWS</td><input type='text' value={marks1} onChange={change1} placeholder='enter marks'></input>
                            </tr>
                            <tr>
                                <td>2. OOPS</td><input type='text' value={marks2} onChange={change2} placeholder='enter marks'></input>
                            </tr>
                            <tr>
                                <td>3. Physics</td><input type='text' value={marks3} onChange={change3} placeholder='enter marks'></input>
                            </tr>
                            <tr>
                                <td>4. Maths</td><input type='text' value={marks4} onChange={change4} placeholder='enter marks'></input>
                            </tr>
                            <br></br>
                            <button onClick={Calculate}>Calculate</button>
                            <tr>
                                <th>Total Marks: </th><textarea value={total} onChange={changeTotalMarks}></textarea>
                            </tr>
                            <tr>
                                <th>Percentage: </th><textarea value={percentage} onChange={changePercentage}></textarea>
                            </tr>

                        </table>
                    </center>
                </fieldset>
            </div>

        </>
    )
}
