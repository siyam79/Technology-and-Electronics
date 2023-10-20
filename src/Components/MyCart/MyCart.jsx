import { useLoaderData } from "react-router-dom";

const MyCart = () => {

    const addCards = useLoaderData()
    console.log(addCards);





    return (
        <div className="min-h-min w-[80%] mx-auto  grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6  ">

            {
                addCards.map(card => <div key={card._id} >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src= {card.image } alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {card.name} </h2>
                            <p> Price :${card.price} </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"></button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyCart;