// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  console.log()

  const handleLogout = () =>{
    logOut()
  }

  return (
    <div className="navbar bg-base-100">
      <div className="">
        <Link to='/'><h1 className="btn btn-ghost normal-case text-3xl ">
          Bistro <span className="text-orange-400 mx-3 text-4xl">de</span> France
        </h1></Link>
      </div>
      <div className="flex-col md:flex-row gap-4 mx-auto">
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog </Link>
      </div>


      
       {user? 
       
       <div className="flex gap-4">


          <button onClick={handleLogout} className="btn btn-primary">LogOut</button>

        <div  onMouseOver={handleMouseOver}>
        <img className="w-10 rounded-full" src={user?.photoURL} />
      </div>
      {
        isHovering && (
          <div>
           {
            user?.displayName
           }
          </div>
        )
      }
         </div>
       
       :
       <Link to='/login'>
          <button className="btn btn-primary">Login</button>
        </Link>
        }
    </div>
  );
};

export default Navbar;
