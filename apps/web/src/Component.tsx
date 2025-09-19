("use client");
import { HelloWorld, AnimatedSquares } from "components";
import "./Components.css";

export default () => {
  return (
    <div className="component-container">
      <HelloWorld width={256} height={256} r={256 / 3} />
      <AnimatedSquares width={500} height={300} squares={4} speed={500} />
    </div>
  );
};
