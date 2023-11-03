import React,{useState} from 'react'


export default function Textform(props) {
    
    const handleUpClick =()=>{
        console.log("Upper case was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
        console.log("Lower case was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick =()=>{
        
        let newText="";
        setText(newText)
    }
    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value)

    }
    const handleCopy =()=>{
        let text= document.getElementById("mybox1")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    
    
    const[text,setText] =useState('Enter text here 2');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
       

    
        
        </div>
        <div className='container my-3'>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length}Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
    </>
    
  )
}


