import React, { useState } from "react";
// import { personnels } from "./data";
import Appointee from "./Appointee";

function Appointees({appointeed}) {
    
    return (
      <>
        <div className="appointees">
          {appointeed.map((appoint) => {
            return <Appointee key={appoint.id} {...appoint} />;
          })}
        </div>
      </>
    );
}

export default Appointees;
