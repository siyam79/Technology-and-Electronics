import { NavLink } from "react-router-dom";
import logo from "../../assets/_Pngtree_electronic_logo_free_logo_design_5044931-removebg-preview.png"
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import useAuth from "../useAuth/useAuth";

const NavBar = () => {

    const { logOut, user } = useAuth()

    const [active, setActive] = useState(false)
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }


    const navLinks = <>

        <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer  ">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? ' bg-sky-800  px-2  rounded-md ' : ""
                }
            >
                Home
            </NavLink>
        </li>

        <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
            <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'bg-sky-800  px-2  rounded-md ' : ""
                }
            >
                Add Products
            </NavLink>
        </li>

        <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
            <NavLink
                to="/mycart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? 'bg-sky-800  px-2  rounded-md ' : ""
                }
            >
                My Cart
            </NavLink>
        </li>

        {
            !user?.email ? <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? 'bg-sky-800  px-2  rounded-md ' : ""
                    }
                >
                    Login
                </NavLink>
            </li>

            :
            <div className="flex justify-center items-center  gap-4 relative ">
            {
                active && (
                    <div className="absolute top-8 z-50 lg:bg-slate-900  px-10  rounded-sm  ">
                       
                        <div className=" ">
                            <h1 className=" font-medium text-center "> {user?.displayName} </h1>
                            <p className="  font-sm text-center px-6  "> {user.email} </p>
                        </div>
                        <button onClick={logOut} className=" lg:text-pink-600 text-center px-20  lg:pb-2  ">Logout</button>
                    </div>
                )
            }
            <img onClick={() => setActive(!active)} className="w-8 rounded-full " src={user?.photoURL} alt={user?.displayName} />
        </div>

        }

    </>
    return (

        <div>
        <div className="  ">
            <nav className=" sticky top-0 left-0 z-50 w-full  mr-4 lg:flex flex items-center justify-between bg-slate-900  text-white px-4 ">
                <img className="w-24" src={logo} alt="" />
                <ul className=" lg:flex lg:px-10 lg:gap-8 gap-4 mr-6 hidden font-bold text-lg ">
                    {navLinks}
                </ul>
                <div className=" flex lg:hidden items-center gap-6 mr-4 ">
                    <button onClick={handleClick}>
                        {
                            click ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=" text-xl  cursor-pointer "></AiOutlineMenu>
                        }
                    </button>

                </div>
            </nav>

            <div className="">
                <ul className={`lg:hidden gap-12 z-40 sticky top-0 left-0 block text-lg space-y-4 px-4 py-2  text-white font-bold  ${click ? " fixed duration-700  bg-slate-900  w-full  text-center pb-20 " : 'hidden'}`}>
                    <li onClick={handleClick} className="py-4 space-y-4  ">
                        {navLinks}
                    </li>
                </ul>
            </div>
        </div>
    </div>


    );
};

export default NavBar;