import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className="mt-2 ">
            <footer className="footer footer-center p-10 bg-slate-900 text-base-content rounded">
                <nav className="grid grid-flow-col lg:gap-16 gap-6 text-white">
                    <Link className="link link-hover lg:font-semibold lg:text-lg">About us</Link>
                    <Link className="link link-hover lg:font-semibold lg:text-lg">Contact</Link>
                    <Link className="link link-hover lg:font-semibold lg:text-lg">Jobs</Link>
                    <Link className="link link-hover lg:font-semibold lg:text-lg">Press kit</Link>
                </nav>
                <nav className="grid grid-flow-col lg:gap-16 gap-6 text-white ">
                    <Link className="link link- lg:font-semibold lg:text-lg">Terms of use</Link>
                    <Link className="link link- lg:font-semibold lg:text-lg">Privacy policy</Link>
                    <Link className="link link- lg:font-semibold lg:text-lg">Cookie policy</Link>
                </nav>
                <nav className="grid grid-flow-col lg:gap-16 gap-6 text-white ">
                    <Link className="link link-hover lg:font-semibold lg:text-lg ">Branding</Link>
                    <Link className="link link-hover lg:font-semibold lg:text-lg ">Design</Link>
                    <Link className="link link-hover lg:font-semibold lg:text-lg ">Marketing</Link>
                    <Link className="link link-hover lg:font-semibold lg:text-lg ">Advertisement</Link>
                </nav>
                <nav className="text-white ">
                    <div className="grid grid-flow-col gap-4">
                        <Link className="text-2xl "> <BsFacebook></BsFacebook> </Link>
                        <Link className="text-2xl "> <BsYoutube></BsYoutube> </Link>

                        <Link className="text-2xl "><BsTwitter></BsTwitter></Link>
                    </div>
                </nav>
                <aside >
                    <div className=" flex gap-2 mb-2 ">
                    <input className=" px-2 py-2 lg:w-60 rounded-xl " type="text" placeholder=" Search Hare " />
                    <button className=" text-white bg-pink-600 px-4 rounded-md font-bold  "> Search </button>
                    </div>
                    <p className="text-white">Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;