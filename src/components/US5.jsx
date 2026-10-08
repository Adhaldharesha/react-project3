import { useState } from "react";

function Store() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h1>{text}</h1>
    </div>
  );
}

export default Store;