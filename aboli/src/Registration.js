import React from 'react'

const info={
    width:'50%'
}
export default function Registration(props) {
  return (
    <>
    <center>
      <table style={info} border="2">
        <tr><td> Name:</td>
            <td>{props.name}</td>
        </tr>
        <tr><td> Age:</td>
            <td>{props.age}</td>
        </tr>
        <tr><td> Mobile No.:</td>
            <td>{props.no}</td>
        </tr>
        <tr><td> Image:</td>
            <td><img src={props.img} alt="Image" style={{width:'50%'}}></img></td>
        </tr>
      </table>
      </center>
    </>
  )
}

