import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import AddEquipmentsSection from "../sections/AddEquipmentsSection";
import Footer from "../components/Footer";

const AddEquipments = () => {
    return (
        <>
            <Helmet><title>Add new equipment - EquipSports</title></Helmet>
            <Navbar />

            {/* Banner */}
            {/* <Banner 
                title="Add Equipments"
                description="Upload the equipment image, provide its name, select a category, set the price, rating, stock, and processing time. Add a description and customization options."
                buttonText="My Equipments"
                imageSrc="https://i.ibb.co.com/zHj7XdB/Imagess-1.jpg"
            /> */}

            {/* Add Equipment Form */}
            <section className="py-[20px]">
                <AddEquipmentsSection />
            </section>

            <Footer />

        </>
    );
};

export default AddEquipments;