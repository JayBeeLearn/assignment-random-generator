import React from "react";
import { Link, Outlet } from "react-router-dom";

function MasterLayout() {
  return (
    <div>
      <div className="w-[100%]">
        <nav className="bg-blue-300">
          <Link className="text-5xl text-white p-2 cursor-pointer hover:text-gray-400">RG</Link>
        </nav>
        <div className="px-4 md:px-8">
          <Outlet />
        </div>{" "}
      </div>
    </div>
  );
}

export default MasterLayout;
