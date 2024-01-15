import React from "react";

function Appointee({ id, name, priv, CO, SO, SEC }) {
  return (
    <>
      <div className="appointee-card">
        <p className="appointee-name">{name}</p>
        <small className={priv == 'Elder'&& 'priv-el'|| priv== 'MS' && 'priv-ms' }>{priv}</small>
        <small className={CO&& 'resp'|| SO && 'resp' || SEC && 'resp'}>{CO && "CoE"  || SO && "SO"  || SEC && "Sec" }</small>
      </div>
    </>
  );
}

export default Appointee;
