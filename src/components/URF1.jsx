
import { useEffect, useRef, useState } from "react";

function URF() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {prevCount.current}</h2>

      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </>
  );
}

export default URF;
