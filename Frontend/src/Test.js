import React,{useState} from 'react'

export default function Test() {
    const [text, setText]=useState('Enter Text here');
    const changeText =(event)=>{
        let newtext=event.target.value;
        setText(newtext.toUpperCase());
    }
    const copyText =()=>{
        var copytext=document.getElementById("box");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
    }
  return (
    <div>
    <h1>{text}</h1>
    <div>
    <textarea id='box' rows={8} cols={100} value={text} onChange={changeText}> </textarea>

    </div>
    <a className='nav-link active' href="/home">Home
    </a>
    <button className='btn btn-primary' onClick={copyText}>Copy</button>

    </div>
  )
}
