import { Link } from "react-router-dom";
import errorimg from "../../assets/visuals-JpTY4gUviJM-unsplash.jpg"
import { FaArrowRight } from 'react-icons/fa';

const Error = () => {


    // {
    //     "name": "Watch  EOS 70D ",
    //     "image": "https://i.ibb.co/VQMDQ97/raagesh-c-u-FTRn-Ki5j-M-unsplash.jpg",
    //     "brand_name": "Apple",
    //     "price": "50",
    //     "type": "Watch",
    //     "description": "Pro camera system48MP Main: 24 mm, ƒ/1.78 aperture, second generation sensor shift optical image stabilization, 100% Focus Pixels, support for super high resolution photos (24MP and 48MP)12MP Ultra Wide: 13 mm, ƒ/2.2 aperture and 120° field of view, 100% Focus Pixels12MP 2x Telephoto (enabled by quad pixel sensor): 48 mm, ƒ/1.78 aperture, second generation sensor shift optical image stabilization, 100% Focus Pixels12MP 5x Telephoto: 120 mm, ƒ/2.8 aperture, 3D sensor shift optical image stabilization and autofocus, tetraprism design5x optical zoom in, 2x optical zoom out; 10x optical zoom range Digital zoom up to 25x... ",
    //     "rating": 4
    // }


















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