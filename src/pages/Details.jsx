import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const Details = () => {
    const {
        _id, name, category, price, rating, stock, pTime, imgurl, description, userName, userEmail,
    } = useLoaderData(); 

    return (
        <>
            <Navbar />
            <section className="container mx-auto py-12 px-6 flex flex-col gap-5">
                <div><Link to='/all-sports-equipment' className="flex items-center gap-3 hover:text-p2 duration-500"><FaArrowLeftLong />Back to all equipments</Link></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Image Section */}
                    <div className="rounded-lg overflow-hidden ">
                        <img 
                            src={imgurl} 
                            alt={name} 
                            className="w-full h-full object-cover  duration-300"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col gap-5">
                        <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
                        <p className="text-sm text-gray-600 uppercase"><span className="btn1 rounded-full">{category}</span></p>
                        
                        <p className="text-lg text-gray-800 font-medium">
                            <span className="font-bold">Price:</span> ${price}
                        </p>

                        <p className="text-lg text-gray-800">
                            <span className="font-bold">Rating:</span> {rating} ⭐
                        </p>

                        <p className="text-lg text-gray-800">
                            <span className="font-bold">Available Stock:</span> {stock}
                        </p>

                        <p className="text-lg text-gray-800">
                            <span className="font-bold">Processing Time:</span> {pTime} days
                        </p>

                        <p className="text-gray-700 text-base leading-relaxed">
                            <span className="font-bold">Description:</span> {description}
                        </p>

                        <div className="border-t border-gray-300 pt-4 mt-6 flex flex-col gap-3">
                            <h3 className="text-xl font-semibold">Seller Information</h3>
                            <p className="text-gray-800">
                                <span className="font-bold">Seller Name:</span> {userName}
                            </p>
                            <p className="text-gray-800">
                                <span className="font-bold">Email:</span> {userEmail}
                            </p>
                            <div>
                                <button className="btn1">Contact now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Details;
