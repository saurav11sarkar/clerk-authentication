import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-slate-300 fixed z-50">
      <div className="flex justify-between items-center h-full px-6">
        <div className="text-2xl font-bold">Navbar</div>
        <div className="flex gap-4">
          <Link href={"/login"}><div className="text-lg font-semibold">Login</div></Link>
          <Link href={"/register"}><div className="text-lg font-semibold">Register</div></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
