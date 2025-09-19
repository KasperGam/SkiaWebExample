("use client");
import { HelloWorld, AnimatedSquares } from "components";
import "./Components.css";
import { useState } from "react";

export default () => {
  const [squares, setSquares] = useState(4);
  return (
    <div className="component-container">
      <HelloWorld width={256} height={256} r={256 / 3} />
      <div className="button-container">
        <button title="Add square" onClick={() => setSquares((s) => s + 1)}>
          Add square
        </button>
        <button
          title="Remove square"
          onClick={() => setSquares((s) => Math.max(s - 1, 0))}
        >
          Remove square
        </button>
      </div>
      <AnimatedSquares
        width={500}
        height={300}
        squares={squares}
        speed={1000}
      />
    </div>
  );
};
