import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h1>{isOn ? "ON" : "OFF"}</h1>

      <button onClick={toggleButton}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default Toggle;