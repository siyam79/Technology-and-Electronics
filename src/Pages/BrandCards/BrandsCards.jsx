import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://www.shutterstock.com/image-vector/vector-oops-symbol-260nw-133546157.jpg"
                        alt="Brand Not Found"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Brand Not Found</h2>
                    <p>Sorry, the requested brand could not be found.</p>
                </div>
            </div>
        );
    }

    return (

        <div>
            <div className="grid grid-cols-2 gap-3 ml-4">
                {cardBrand.map((brandCard) => (
                    
                    <div
                        className="relative flex justify-evenly w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                        key={brandCard._id}
                    >
                        <div className="relative w-1/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                            <img
                                src={brandCard.imgage}
                                alt="image"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                                {brandCard.brand_name}
                            </h6>
                            <h4 className=""> Type: {brandCard.type}</h4>
                            <h4>Price: {brandCard.price}</h4>
                            <h4> Rating: {brandCard.rating}</h4>

                            <div className="btn-group mr-10 mt-6">
                                <button className="btn btn-active">Update</button>

                                <button className="btn">Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandsCards;