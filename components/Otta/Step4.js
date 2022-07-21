import React, { useEffect, useRef, useState } from "react";
import { Row , Col } from "react-bootstrap";
import styles from "../Otta/QuestionForm.module.css";
import { BsCheck2 } from "react-icons/bs";
import { render } from "react-dom";
// import "./styles.scss";

import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
  useCircularInputContext
} from "react-circular-input";

function Step4() {
  const [value, setValue] = useState(0.1);
  const [count, setCount] = useState(0);
  const prevValue = usePreviousValue(value);
  const prevCount = usePreviousCount(count);
  const stepValue = (v) => Math.round(v / 10) * 10;

  function usePreviousValue(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  function usePreviousCount(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  let accumulatedCurrentValue = stepValue(value * 1000) + count * 1000;

  const valueWithinLimits = (value) => {
    if (count >= 5) {
      if (accumulatedCurrentValue > 5500) {
        setCount(4);
      }
      accumulatedCurrentValue = 5000;
      return 1;
    } else if (count < 0) {
      if (accumulatedCurrentValue < -500) {
        setCount(0);
      }
      accumulatedCurrentValue = 0;
      return 0;
    } else {
      return value;
    }
  };

  const percentage = (accumulatedCurrentValue / 5000) * 1;
  const size = 200;
  const CircularProgressWidth = size / 6;
  const circleSize = CircularProgressWidth * 2.5;
  const circleThumbRadius = size / 15;
  const angle = 360 * value;

  useEffect(() => {
    if (stepValue(value * 1000) !== stepValue(prevValue * 1000)) {
      if (
        stepValue(prevValue * 1000) < 100 &&
        stepValue(value * 1000) > 900 &&
        prevCount === count &&
        count >= 0
      ) {
        setCount(count - 1);
      } else if (
        stepValue(prevValue * 1000) > 900 &&
        stepValue(value * 1000) < 100 &&
        count <= 4 &&
        prevCount === count
      ) {
        setCount(count + 1);
      } else {
        setCount(count);
      }
    }
  }, [value, prevValue, count, prevCount, accumulatedCurrentValue]);

  const changedValue = (event) => {
    // setValue(event.currentTarget.value * 1000);
    console.log(event.currentTarget.value, "event.currentTarget.value");
  };

  console.log(value, "value");
  return (
   
<>
<div className={`${styles.otta_header} text-center`}>
        <h4 className="fw-bold">Where would you like to work?</h4>
      </div>
      <div className={`${styles.option_wrapper} option_wrapper pt-5`}>
      <div>
      {/* <input
        type="number"
        step="10"
        min="0"
        max="5001"
        value={`${count ? count : ""}${value ? stepValue(value * 1000) : ""}`}
        onChange={changedValue}
      /> */}
      <div
        className="circleContainer"
        style={{
          width: `${size}px`,
          height: `${size}px`
        }}
      >
        <div>
          <div
            className="progressCircle"
            style={{
              height: `calc(100% - ${circleSize}px)`,
              width: `calc(100% - ${circleSize}px)`,
              left: `${CircularProgressWidth * 1.25}px`,
              right: `${CircularProgressWidth * 1.25}px`,
              bottom: `${CircularProgressWidth * 1.25}px`,
              top: `${CircularProgressWidth * 1.25}px`,
            //   background: "#0074d7",
              zIndex: "-1"
            }}
          />
          <div
            className="test1"
            style={{
              position: "absolute",
              height: `calc(calc(100% - ${
                CircularProgressWidth * 2.5
              }px) - calc(calc(100% - ${
                CircularProgressWidth * 2.5
              }px) * ${percentage}))`,
              width: `calc(100% - ${circleSize}px)`,
              left: `${CircularProgressWidth * 1.25}px`,
              right: `${CircularProgressWidth * 1.25}px`,
              bottom: `${CircularProgressWidth * 1.25}px`,
              top: `${CircularProgressWidth * 1.25}px`,
            //   background: "#3b82f6",
              zIndex: "-1"
            }}
          />
          <div
            className="test1"
            style={{
              position: "absolute",
              height: `calc(100% - ${circleSize}px)`,
              width: `calc(100% - ${circleSize}px)`,
              left: `-${CircularProgressWidth * 0.75}px`,
              right: `-${CircularProgressWidth * 0.75}px`,
              bottom: `-${CircularProgressWidth * 0.75}px`,
              top: `-${CircularProgressWidth * 0.75}px`,
            //   background: "transparent",
              borderRadius: "100%",
              border: `solid white ${CircularProgressWidth * 2}px`,
              zIndex: "-1"
            }}
          />
        </div>

        <CircularInput className="mt-2"
          style={{
            height: `${size}`,
            width: `${size}`
          }}
          value={valueWithinLimits(value)}
          onChange={(value) => setValue(valueWithinLimits(value))}
        >
          <circle
            strokeWidth="1"
            // r="110"
            stroke="gray"
            fill="none"
            strokeLinecap="round"
            cx="100"
            cy="100"
          />
          <circle
            strokeWidth="1"
            // r="90"
            stroke="gray"
            fill="none"
            strokeLinecap="round"
            cx="100"
            cy="100"
          />
          <CircularTrack strokeWidth={circleThumbRadius} stroke="#eee" />

          <CircularProgress
            className="gradient-border"
            strokeLinecap="butt"
            strokeWidth={14}
            stroke={`#0074d7`}
          />

          <CircularThumb
            r={circleThumbRadius}
            fill="#004580"
            style={{ zIndex: "2" }}
          />
         
          <text
            x={100}
            y={100}
            textAnchor="middle"
            dy="0.3em"
            fontWeight="bold"
            fill="$black"
            style={{
            //   fontFamily: "Open Sans,open-sans,sans-serif",
              fontSize: "2rem"
            }}
          >
            ${accumulatedCurrentValue}
          </text>
        </CircularInput>



      </div>
<Row>
  <Col md={5} className="mx-auto mb-5">
  <div className="text-center">


<ul className="list-unstyled">
<li className="mb-1"> We never share this with companies</li>
<li className="mb-1"> We only use this to filter out roles and save you time</li>
<li className="mb-1"> <span>If you&apos;re unsure, we recommend choosing a lower
   amount so you don&apos;t miss out on roles that could be great</span></li>
</ul>

</div>
  </Col>
</Row>
    </div>
      </div> 
</>






  );
}

function CustomComponent({
  accumulatedCurrentValue,
  circleThumbRadius,
  angle
}) {
  const { getPointFromValue } = useCircularInputContext();
  const { x, y } = getPointFromValue();
  const circleCenterYpos = y - circleThumbRadius / 2;
  const clockWiseSlider = accumulatedCurrentValue === 0;
  const antiClockWiseSlider = accumulatedCurrentValue === 5000;
  console.log(antiClockWiseSlider, clockWiseSlider);

}

export default Step4;
