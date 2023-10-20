import { useLoaderData } from "react-router-dom";

const MyCart = () => {

    const addCards = useLoaderData()
    console.log(addCards);
 




    return (
        <div className="min-h-min w-[80%] mx-auto  grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6  ">

            {
                addCards.map(card => <div key={card._id} >
                    <div className="card card-compact w-96 h-[400px] bg-cyan-500 shadow-xl">
                        <figure><img className="w-full " src= {card.image } alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white "> {card.name} </h2>
                            <h1 className="text-xl font-bold text-white "> Price :${card.price} </h1>
                            <div className="card-actions justify-end">
                                <button className="bg-pink-600 px-6 py-2 text-white font-bold text-lg rounded-md  "> Deleted </button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyCart;