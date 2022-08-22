import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(false);

  const showhiddenPara = () => {
    setShow(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={showhiddenPara}>
        Show
      </button>
      {show === true && <p id="para">sdfrfiheorie</p>}
    </div>
  );
}


export default App;

  
