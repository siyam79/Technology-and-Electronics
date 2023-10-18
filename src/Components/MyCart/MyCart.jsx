import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div className="min-h-min ">

            <h1> all data {products.length} </h1>


            {
                products.map(product => <div key={product._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.imgage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default MyCart;