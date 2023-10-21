import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
const MyCart = () => {

    const addCards = useLoaderData()
    console.log(addCards);

    const [deleteProduct, setDeleteProduct] = useState(addCards)

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You Products Deleted !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://technology-and-electronics-chi700f7h-siyam79.vercel.app/addcard/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Products has been deleted.',
                                'success'
                            )
                            const remeingProducts = deleteProduct.filter(product => product._id !== _id);
                            setDeleteProduct(remeingProducts)
                        }
                    })
            }
        })

    }


    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])




    return (
        <div className="min-h-min max-w-4xl mx-auto  grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6  ">

            {
                deleteProduct.map(card => <div key={card._id} >
                    <div className="card card-compact w-96 mx-auto  h-[400px] bg-cyan-500 shadow-xl" data-aos="fade-up"
                        data-aos-duration="3000">
                        <figure><img className="w-full " src={card.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white text-xl font-bold "> {card.name} </h2>
                            <h1 className="text-xl font-bold text-white "> Price : ${card.price} </h1>
                            <div onClick={() => handleDelete(card._id)}
                                className="card-actions justify-end">
                                <button className="bg-pink-600 px-6 py-2 text-white font-bold text-lg rounded-md  "> Delete </button>
                            </div>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default MyCart;