import { NavLink } from "react-router-dom";
import logo from "../../assets/_Pngtree_electronic_logo_free_logo_design_5044931-removebg-preview.png"
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import useAuth from "../useAuth/useAuth";

const NavBar = () => {

    const { logOut, user } = useAuth()

    const [active, setActive] = useState(false)
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])


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

                        {/*   swap  */}
                        <label className="swap swap-rotate">
                            <input onChange={handleToggle} checked={theme === 'light' ? false : true} type="checkbox" />
                            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>

                    </ul>
                    <div className=" flex lg:hidden items-center gap-4 ">

                        <button onClick={handleClick}>
                            {
                                click ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=" text-xl  cursor-pointer "></AiOutlineMenu>
                            }

                        </button>
                        <label className="swap swap-rotate ">
                            <input onChange={handleToggle} checked={theme === 'light' ? false : true} type="checkbox" />
                            <svg className="swap-on fill-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-6 h-6  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>

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