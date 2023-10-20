import { useLoaderData } from "react-router-dom";



const ViewDetails = () => {

    const singleBrand = useLoaderData()
    console.log(singleBrand);
    console.log('hellow  bangla ');

    return (
        <div>
            view details 
        </div>
    );
};

export default ViewDetails;