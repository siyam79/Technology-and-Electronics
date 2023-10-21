import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";



const ViewDetails = () => {

    const singleBrand = useLoaderData()

    const { name, image, brand_name, description, price, type } = singleBrand

    const updateProducts = { name, image, brand_name, description, price, type }


    const addToCard = () => {

        fetch('http://localhost:5000/addcard', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProducts)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success(" Products Add to My Cart Route  " , {
                        position :"top-center"
                    })
                }
            })

        console.log(updateProducts);

    }

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content  lg:flex-row flex-col ">
                    <img src={image} className="max-w-[500px] w-full  mr-4  mx-auto  rounded-lg shadow-2xl" />
                    <div className=" py-4 ">
                        <h1 className="text-2xl font-bold py-2 "> {name}</h1>
                        <h1 className="font-bold text-lg py-1  ">Brand : <span className=" text-pink-700 ">{brand_name}</span> </h1>
                        <h1 className="text-lg font-bold py-1 "> Type : {type} </h1>
                        <h1 className="text-2xl font-extrabold py-2 ">Price : ${price} </h1>
                        <p className="py-2  text-sm font-bold "> {description} </p>
                        <div onClick={addToCard} className="badge badge-outline py-4 font-bold  "> Add TO Cart  </div>

                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default ViewDetails;