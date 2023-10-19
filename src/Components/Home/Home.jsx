import {  useLoaderData } from "react-router-dom";
import Banner from "../../Pages/Banner/Banner";
import Pricing from "../../Pages/Pricing/Pricing";
import Contact from "../../Pages/Contact/Contact";
import Work from "../../Pages/Work/Work";
import Card from "../../Pages/Card/Card";


const Home = () => {

    const brands = useLoaderData()
    // console.log(brands);




    return (
        <div>

            <Banner></Banner>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">

                {
                    brands.map(brand => <Card key={brand.id} brand={brand} ></Card>)
                }
                

            </div>

            <Pricing></Pricing>
            <Work></Work>
            <Contact></Contact>

        </div>
    );
};

export default Home;