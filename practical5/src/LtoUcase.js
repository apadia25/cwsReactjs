import { useState } from "react"
import React from 'react'
export default function Textarea() {
const uppercase1 = ()=>{
let newText = text.toUpperCase();
setText1(newText)
}
const change =(event)=>{
console.log("change");
setText(event.target.value)
}
const [text, setText] = useState("Enter the Text2");
const [text1, setText1] = useState("");
return (
<div>
Enter the Text to Convert: <br></br>
<textarea value = {text} onChange={change}></textarea> <br></br>
<button className="btn btn-primary" onClick={uppercase1}>Convert to
UpperCase</button><br></br>
<textarea value = {text1} onChange={change}></textarea> <br></br>
</div>
)
}