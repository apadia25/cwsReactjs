import React from 'react';

export default function Reg(props) {
    return (
        <><div>
                <center>

                    <table border={3} cellPadding={10}>
                        <tr>
                            <td rowSpan={4}>{props.sr}</td>
                            <td>Name:</td>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{props.age}</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>{props.no}</td>
                        </tr>
                        <tr>
                            <td>Image:</td>
                            <td><img src={props.img} alt='img'></img></td>
                        </tr>
                    </table> </center>  </div></>
      );
    }

