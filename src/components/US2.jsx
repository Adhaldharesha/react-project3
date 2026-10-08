
import { useState } from "react";

function MatchText() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState("");

  const checkMatch = () => {
    if (text1 === text2) {
      setResult("Text matches");
    } else {
      setResult("Text does not match");
    }
  };

  return (
    <div>
      <h2>Check Text Match</h2>

      <input
        type="text"
        placeholder="Enter first text"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter second text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />

      <br /><br />

      <button onClick={checkMatch}>
        Check
      </button>

      <h3>{result}</h3>
    </div>
  );
}

export default MatchText;
