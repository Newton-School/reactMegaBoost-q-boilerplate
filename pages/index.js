import { useState, useCallback } from "react";
import MegaBoost from "./MegaBoost";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleMegaBoost = () => {
    setCount((currentValue) => currentValue + 1234);
  };

  return (
    <>
      <div id="main">
        Count: {count}
        <section className="btns">
          <button
            className="single-increment-btn"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Click me!
          </button>
          <MegaBoost handleClick={handleMegaBoost} />
        </section>
      </div>
    </>
  );
}
