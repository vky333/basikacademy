import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const LabelCheck = (props) => {
  return (
    <>
      <span className="label_icon me-1">
        <AiOutlineCheck />
      </span>
      <span>{props.labelText}</span>
    </>
  );
};

export default LabelCheck;
