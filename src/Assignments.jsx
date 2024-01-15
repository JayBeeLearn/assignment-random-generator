import React from "react";
import Assignment from "./Assignment";

function Assignments({ parts, selectedAppointee, target }) {
  return (
    <>
          {parts.map((part) => {
          // console.log(target);
        return <Assignment target={target} key={part.id} part={part.name} partID={part.id} selectedAppointee={selectedAppointee} />
      })}
    </>
  );
}

export default Assignments;
