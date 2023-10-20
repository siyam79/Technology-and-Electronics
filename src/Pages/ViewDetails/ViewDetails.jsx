import {  useLoaderData } from "react-router-dom";



const ViewDetails = () => {

    const singleBrand = useLoaderData()

    const addToCard = () => {

    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content  lg:flex-row flex-col ">
                    <img  src={singleBrand.image} className="max-w-[500px] w-full  mr-4  mx-auto  rounded-lg shadow-2xl" />
                    <div className=" py-4 ">
                        <h1 className="text-2xl font-bold py-2 "> {singleBrand.name}</h1>
                        <h1 className="font-bold text-lg py-1  ">Brand : <span className=" text-pink-700 ">{singleBrand.brand_name}</span> </h1>
                        <h1 className="text-lg font-bold py-1 "> Type : {singleBrand.type} </h1>
                        <h1 className="text-2xl font-extrabold py-2 ">Price : ${singleBrand.price} </h1>
                        <p className="py-2  text-sm font-bold "> {singleBrand.description} </p>
                        <div onClick={addToCard} className="badge badge-outline py-4 font-bold  "> Add TO Cart  </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;