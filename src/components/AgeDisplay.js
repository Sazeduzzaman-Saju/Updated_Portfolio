// components/AgeDisplay.js
import React from "react";
import { calculateAge } from "../utilities/calculateAge";

const AgeDisplay = ({ birthdate }) => {
  const { years, months, days } = calculateAge(birthdate);

  return (
    <li className="m-0">
      <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
        Age:
      </span>
      <span>{`${years} years ${months} months ${days} days`}</span>
    </li>
  );
};

export default AgeDisplay;
