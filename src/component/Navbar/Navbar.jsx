// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="">
        <Link to='/'><h1 className="btn btn-ghost normal-case text-3xl ">
          Bistro <span className="text-red-300 mx-3 text-4xl">de</span> France
        </h1></Link>
      </div>
      <div className="flex-col md:flex-row gap-4 mx-auto">
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog </Link>
      </div>
      <div className="w-10 rounded-full ">
        <Link>
          <button>Login</button>
        </Link>
        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
  );
};

export default Navbar;
