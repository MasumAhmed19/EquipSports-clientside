import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const AddEquipments = () => {
    return (
        <div>
            <section className="container mx-auto">
                <Navbar />
            </section>

            {/* Banner */}
            <Banner 
                title="Add Equipments"
                description="Upload the equipment image, provide its name, select a category, set the price, rating, stock, and processing time. Add a description and customization options."
                buttonText="My Equipments"
                imageSrc="https://i.ibb.co.com/zHj7XdB/Imagess-1.jpg"
            />

            {/* Add Equipment Form */}


        </div>
    );
};

export default AddEquipments;