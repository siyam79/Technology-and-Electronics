import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const UpdateBrand = () => {

    const updateBrand = useLoaderData()

    const handleUpdateProducts = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const type = form.type.value;
        const description = form.description.value;
        const brand_name = form.brand_name.value;
        const rating = form.rating.value;
        // console.log(name, imgage, price, description, rating);

        const updateProducts = {
            name,
            image,
            brand_name,
            price,
            type,
            description,
            rating,
        };
        console.log(updateProducts);
        fetch(`https://technology-and-electronics.vercel.app/product/${updateBrand._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateProducts),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(" Products Update Success Full ", {
                        position: "top-left"
                    })
                }
            })
    }




    return (
        <div>
            <div className=" lg:w-[90%]  mx-auto p-2 bg-gray-800 rounded-lg shadow-md mt-1 ">
                <h2 className="text-3xl text-center text-pink-600 font-bold mb-6 mt-10 "> Update Products  </h2>
                <form onSubmit={handleUpdateProducts} className="px-2">
                    <div className=" lg:flex gap-4 ">
                        <div className="mb-4 lg:w-1/2 w-full ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor=""> Name </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder=" Name" name="name" defaultValue={updateBrand.name} required />
                        </div>

                        <div className="mb-4 lg:w-1/2 w-full  ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor=""> image </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="image URL " name="image"
                             defaultValue={updateBrand.image} required />
                        </div>
                    </div>

                    <div className="lg:flex gap-4 ">
                        <div className="mb-4 lg:w-1/2 w-full ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor=""> Price </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder=" Price " name="price"
                            defaultValue={updateBrand.price} required />
                        </div>

                        <div className="mb-4 lg:w-1/2 w-full ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor=""> Brand Name </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Brand Name " name="brand_name" 
                              defaultValue={updateBrand.brand_name}  required />
                        </div>
                    </div>

                    <div className="lg:flex gap-4 ">
                        <div className="mb-4 lg:w-1/2 w-full ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor="">Rating </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Rating Number " name="rating"
                             defaultValue={updateBrand.rating} required />
                        </div>
                        <div className="mb-4 lg:w-1/2 w-full  ">
                            <label className="block text-white  text-md font-semibold mb-2 " htmlFor="">Type Of </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Type Off " name="type" 
                             defaultValue={updateBrand.type} required />
                        </div>
                    </div>
                    <div className="mb-4 ">
                        <label className="block text-white  text-md font-semibold mb-2 " htmlFor="">Description </label>
                        <textarea className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " name="description" id="" 
                         defaultValue={updateBrand.description} placeholder=" Description Here....  " cols="30" rows="10"></textarea>
                    </div>

                    <div className=" text-center justify-center  pb-6 ">
                        <button className=" w-40 rounded-lg  text-white bg-pink-800 hover:bg-pink-500 py-2 "> Update Products </button>
                    </div>
                </form>

                <ToastContainer></ToastContainer>
            </div>



        </div>
    );
};

export default UpdateBrand;





// {
//     "name": "One Plus Nord 3 E ",
//     "image": "https://www.91-cdn.com/hub/wp-content/uploads/2022/11/Upcoming-OnePlus-phones.png",
//     "brand_name": "One Plus",
//     "price": "300",
//     "type": "Smart Phone",
//     "description": "A China-based manufacturer of Android smartphones. Introduced in 2014, OnePlus models are unlocked Android smartphones with quad-core Snapdragon CPUs and up to 8GB RAM that initially ran the Cyanogen version of Android (Cyanogen was later replaced with the company's own Android-based OxygenOS). ",
//     " rating": 5
// }
