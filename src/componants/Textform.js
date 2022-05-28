import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("enter the text");
  const uppercase = () => {
    // console.log("uppercase"+text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.fixalert("Converted to uppercase","success");
  };
  const lowercase = () => {
    // console.log("lowercase"+text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.fixalert("Converted to lowercase","success");
  };
  const capitalize = () => {
    // console.log("capitalize"+text);
    let textArray = text.split(" ");
  let capitalizedText = '';
  for (let i = 0; i < textArray.length; i++) {
    capitalizedText += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + " ";
  }
    setText(capitalizedText);
    props.fixalert("Converted to capitalize","success");
  };
  const textcopy = () => {
    
    let text = document.getElementById("textfrom");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.fixalert("Text are copied","success");
  };
  const removeextraspaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.fixalert("Extra spaces are remove","success");
  };
  const cleartext = () => {
    let newtext = ' ';
    setText(newtext);
    props.fixalert("Text are cleared","success");
  };
  const onchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      
        <div className="form-group">
        <h1 className={`conatiner m-4 p-2 ms-5 text-${props.mode===`light`?`dark`:`light`} text-h`}>{props.textH}</h1>
          <textarea
            className="form-control ms-5"
            id="textfrom"
            onChange={onchange}
            value={text}
            style={{backgroundColor: props.mode===`dark`?`black`:`white`,color:props.mode===`dark`?`white`:`black`,border: '2px solid'}}
            rows="5"
            cols="6"
          ></textarea>
        </div>
        <div className="conatiner m-2 p-2 ms-5 ">
        <button className="btn btn-dark m-2" onClick={uppercase}>
          ChangeToUpperCase
        </button>
        <button className="btn btn-dark m-2" onClick={lowercase}>
          ChangeToLowerCase
        </button>
        <button className="btn btn-dark m-2" onClick={capitalize}>
          ChangeToCapitalize
        </button>
        <button className="btn btn-dark m-2" onClick={textcopy}>
          TextCopy
        </button>
        <button className="btn btn-dark m-2" onClick={removeextraspaces}>
          RemoveExtraSpaces
        </button>
        <button className="btn btn-dark m-2" onClick={cleartext}>
         ClearText
        </button>
        </div>
      <div className={`conatiner m-4 p-2 ms-5 text-${props.mode===`light`?`dark`:`light`}`}>
        <h2>Your Text Summary</h2>
        <h6 className="m-3 p-2">
          {text.split(" ").length} Words And {text.length} Characters
        </h6>
        <p className="m-3 p-2">
          Average time to read para {0.008 * text.split(" ").length * 60}seconds
        </p>
        <h2>Preview.........</h2>
        <p className="m-3 p-2">{text.length>0?text:"Enter somthing into TextBox for preview"}</p>
      </div>
    </>
  );
}
