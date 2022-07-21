import React from "react";
import { BsCheck } from "react-icons/bs";

const LabelHeart = (props) => {
  return (
    <>
      <span className="label_icon me-1">
        <BsCheck />
      </span>
      <span>{props.labelText}</span>
    </>
  );
};

export default LabelHeart;
