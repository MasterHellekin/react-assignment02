import React from "react";

const validation = (props) => {
  let validationMessage = "Text long enough";

  if (props.inputLength <= 5) {
    validationMessage = "Text to short!";
  }
  return (
    <div>
      {/* {props.inputLength > 5 ? <p>Text long enough</p> : <p>Text to short!</p>} */}
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
