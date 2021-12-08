import React, { useState } from "react";

function Toggle() {
  const [isON, setIsOn] = useState(false);
  
  function handleClick() {
    setIsOn((isOn) => !isON);
  }

  return <button style={{ background: isON ? "red" : "white" }} onClick={handleClick}>{isON ? "ON" : "OFF"}</button>;
}

export default Toggle;
