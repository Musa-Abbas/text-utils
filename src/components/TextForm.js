import React, {useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = ()=>{
    console.log("UP click was clicked");
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to uppercase!", "success")
  }

  const handleLowClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to lowercase!", "success")
  }

  const handleClearText = ()=>{
    setText("")
    props.showAlert("Text cleared!", "success")
  }

  const handleOnChange = (event)=>{
    console.log(event)
    setText(event.target.value)
  }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="12"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Plese enter some text to preview it here."}</p>
    </div>
    </>
  )
}
