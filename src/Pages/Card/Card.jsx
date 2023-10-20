import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ brand }) => {

    const { brand_name, img } = brand

    return (
        <div>
            <Link to={`/brands/${brand_name}`}>

                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src={img} alt="Shoes" className="rounded-xl w-full  h-64 " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-3xl "> {brand_name} </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};
Card.propTypes = {
    brand: PropTypes.object
}


export default Card;