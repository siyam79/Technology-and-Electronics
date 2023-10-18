import { useLoaderData } from "react-router-dom";
import Banner from "../../Pages/Banner/Banner";
// import Footer from "../../Pages/Footer/Footer";
// import Nav from "../../Pages/NavBar/Nav";
// import NavBar from "../../Pages/NavBar/NavBar";


const Home = () => {

    const brandItems = useLoaderData();
    console.log(brandItems);

    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Banner></Banner>
            {/* <Nav></Nav> */}
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
                {
                    brandItems.map(item => <div key={item.id}>

                        <div className="card w-96   bg-base-100 shadow-xl">
                            <figure className="px-2 pt-2">
                                <img src={item.img} alt="Shoes" className="rounded-xl h-64 " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title"> {item.brand_name} </h2>
                                {/* <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                    </div>)
                }
                
            </div>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;