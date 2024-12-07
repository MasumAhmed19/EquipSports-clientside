import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MyEquipCard from "../components/MyEquipCard";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet-async";

const MyEquipments = () => {
    const equipsData = useLoaderData();
    console.log(equipsData)
    return (
        <>
            <Helmet><title>My equipments - EquipSports</title></Helmet>
            <Navbar />
            <Banner
                title="My equipments"
                description="Upload the equipment image, provide its name, select a category, set the price, rating, stock, and processing time. Add a description and customization options."
                buttonText="My Equipments"
                imageSrc="https://i.ibb.co.com/zHj7XdB/Imagess-1.jpg"
            />
            <section className="container mx-auto">
                <div>
                    {
                        equipsData.length==0 ? 
                        (<>
                            There is no equipments you have added.
                        </>)
                        :
                        (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-[70px]">
                            {
                                equipsData.map(element => <MyEquipCard key={element._id} element={element} />)
                            }
                        </div>)
                    }
                </div>

            </section>
            <Footer />
        </>
    );
};

export default MyEquipments;