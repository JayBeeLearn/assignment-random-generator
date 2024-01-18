import React from "react";

function Appointee({ id, name, priv, CO, SO, SEC, removeAppointee }) {
  return (
    <>
      <div className=" flex py-2 px-1 my-2 mx-1 bg-gray-50 rounded">
        <div className="w-4/5">
          <p className="appointee-name">{name}</p>
          <small
            className={
              (priv == "Elder" && "priv-el") || (priv == "MS" && "priv-ms")
            }
          >
            {priv}
          </small>
          <small
            className={(CO && "resp") || (SO && "resp") || (SEC && "resp")}
          >
            {(CO && "CoE") || (SO && "SO") || (SEC && "Sec")}
          </small>
        </div>
        <button
          onClick={() => {
            removeAppointee(id);
          }}
          className="justify-end text-white h-8 rounded align-middle items-center my-auto bg-red-400 py-0 px-2"
        >
          X
        </button>
      </div>
    </>
  );
}

export default Appointee;
