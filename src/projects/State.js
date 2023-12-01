import React from "react";
import "./State.css";
import { useState } from "react";

export default function State() {
  const [state, setState] = useState(1);
  let a = ["naga", "bhushan", "rao", "mandala"];
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="steps">
            <div className={state >= 1 ? "active" : ""}>1</div>
            <div className={state >= 2 ? "active" : ""}>2</div>
            <div className={state >= 3 ? "active" : ""}>3</div>
          </div>
          <p>
            {" "}
            step{state}: {a[state]}
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                if (state > 0) {
                  setState(state - 1);
                }
              }}
            >
              previous
            </button>
            <button
              onClick={() => {
                if (state <= 3) {
                  setState(state + 1);
                }
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
