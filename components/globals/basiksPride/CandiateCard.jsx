import React from "react";
import Image from "next/image";
export const CandiateCard = (props) => {
  return (
    <>
      <div className="card">
        <Image
          className="d-block"
          width={397}
          height={487}
          src={props.Image}
          alt="Candidate"
        />
        <div className="card-body canditeCard">
          <div className="canditeName text-center">{props.Name}</div>
          <div className="canditeDesignation text-center">
            {props.Designation}
          </div>
          <div className="CandiateCompny text-center">{props.Company}</div>
        </div>
      </div>
    </>
  );
};

export default CandiateCard;
