import React from "react";

function Assignment({ target, part, selectedAppointee, partID }) {
  // console.log(part);
  return (
    <>
      <p key={partID} className="assignment">
        {part}{" "}
      </p>

    
        <span className={partID + 1 == target && "assignee"}>
          {partID + 1 == target && selectedAppointee}
        </span>
   </> 
  );
}

export default Assignment;
