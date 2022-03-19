import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("enter the text");
  const uppercase = () => {
    // console.log("uppercase"+text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const lowercase = () => {
    // console.log("lowercase"+text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const capitalize = () => {
    // console.log("capitalize"+text);
    let textArray = text.split(" ");
  let capitalizedText = '';
  for (let i = 0; i < textArray.length; i++) {
    capitalizedText += textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1) + " ";
  }
    setText(capitalizedText);
  };
  const onchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      
        <div className="form-group">
        <h1>{props.textH}</h1>
          <textarea
            className="form-control"
            id="textfrom"
            onChange={onchange}
            value={text}
            rows="5"
            cols="6"
          ></textarea>
        </div>
        <button className="btn btn-dark m-2" onClick={uppercase}>
          ChangeToUpperCase
        </button>
        <button className="btn btn-dark m-2" onClick={lowercase}>
          ChangeToLowerCase
        </button>
        <button className="btn btn-dark m-2" onClick={capitalize}>
          ChangeToCapitalize
        </button>
     
      <div className="conatiner m-4 p-2">
        <h2>Your Text Summary</h2>
        <h6>
          {text.split(" ").length} Words And {text.length} Characters
        </h6>
        <p>
          Average time to read para {0.008 * text.split(" ").length * 60}seconds
        </p>
        <h2>Preview.........</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
