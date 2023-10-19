import { Link } from "react-router-dom";
import errorimg from "../../assets/visuals-JpTY4gUviJM-unsplash.jpg"
import { FaArrowRight } from 'react-icons/fa';

const Error = () => {
    return (
        <div>
            <div className=" text-center justify-center  items-center flex my-4  ">
                <Link to='/'> <button className=" bg-pink-600 px-6 py-1 text-white font-bold flex items-center  justify-center  gap-2  rounded-md   "> Go too Home
                    <FaArrowRight></FaArrowRight>
                </button></Link>
            </div>
            <img className=" w-[600px] mx-auto rounded-lg  " src={errorimg} alt="" />
        </div>
    );
};

export default Error;