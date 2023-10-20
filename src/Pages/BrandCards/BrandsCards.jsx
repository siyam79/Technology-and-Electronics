import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandsCards = () => {
    const { brand_name } = useParams();
    const loadedBrand = useLoaderData();
    console.log(loadedBrand);

    const [cardBrand, setCardBrand] = useState([]);

    useEffect(() => {
        if (Array.isArray(loadedBrand) && loadedBrand.length > 0) {
            const filteredBrands = loadedBrand.filter(
                (card) => card.brand_name.toLowerCase() === brand_name.toLowerCase()
            );
            setCardBrand(filteredBrands);
        }
    }, [brand_name, loadedBrand]);


    if (cardBrand.length === 0) {
        return (

            <div className=" w-96 bg-base-100 shadow-xl justify-center items-center  ">
                <figure className="px-10 pt-10 text-center ">
                    <img src="https://t3.ftcdn.net/jpg/01/01/89/46/360_F_101894688_RVSZUtDfPR6Cr5eBDQI7Qo5pZ01jmyK3.webp" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold ">No Brand Found !</h2>
                    <div className="card-actions">
                        <Link to='/products'><button className=" bg-pink-600 py-2 px-6 rounded-xl  font-bold  "> Add to The Brands </button></Link>
                    </div>
                </div>
            </div>

        );
    }

    return (

        <div>
            {/*   tip  carousal  */}
            <div className="carousel w-full h-[80vh] mt-1">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://img.freepik.com/premium-vector/realistic-electronic-devices-gadgets-isometry-vector-isometric-illustration-devices_480270-27.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://www.indiafilings.com/learn/wp-content/uploads/2019/11/Electronic-Hardware-Technology-Park.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full ">
                    <img src="https://i.pinimg.com/736x/53/8e/b9/538eb93267bad0b3d72078f3be0e0ef2.jpg" className="w-full" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-3 mb-10  ">
                <a href="#item1" className="btn btn-xs ">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>



            <div className=" max-w-4xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-6 ">
                {cardBrand.map((brandCard) => (
                    <div key={brandCard._id} className="card w-full bg-base-100  shadow-xl">
                        <figure><img className="h-[300px] w-full " src={brandCard?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold ">
                                {brandCard?.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <div className=" flex items-center justify-between px-2 ">
                                <h1 className="text-xl  font-bold "> {brandCard?.type} </h1>
                                <h1 className="text-xl  font-bold ">Brand : {brandCard.brand_name}</h1>
                            </div>
                            <h1 className="text-2xl  font-extrabold text-pink-600 "> Price ${brandCard?.price} </h1>
                            <div className="card-actions justify-end ">
                                <Link to={`/products/${brandCard._id}`}> <div className="badge badge-outline py-4 font-bold "> View Details </div></Link>
                                <Link to={`/product/${brandCard._id}`}><div className="badge badge-outline py-4 font-bold "> Update Details </div></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandsCards;










