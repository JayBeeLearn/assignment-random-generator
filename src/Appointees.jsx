import React, { useState } from "react";
// import { personnels } from "./data";
import Appointee from "./Appointee";

function Appointees({ appointeed, removeAppointee }) {
  return (
    <>
      <div className="block sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {appointeed.map((appoint) => {
          return (
            <Appointee
              key={appoint.id}
              {...appoint}
              removeAppointee={removeAppointee}
            />
          );
        })}
      </div>
    </>
  );
}

export default Appointees;
