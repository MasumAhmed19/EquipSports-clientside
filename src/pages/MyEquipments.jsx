import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MyEquipCard from "../components/MyEquipCard";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const MyEquipments = () => {
  const loadedData = useLoaderData();
  const [equipsData, setEquipsData] = useState(loadedData); 

  return (
    <>
      <Helmet>
        <title>My Equipments - EquipSports</title>
      </Helmet>
      <Navbar />
      <Banner
        title="My Equipments"
        description="Upload the equipment image, provide its name, select a category, set the price, rating, stock, and processing time. Add a description and customization options."
        buttonText="My Equipments"
        imageSrc="https://i.ibb.co.com/zHj7XdB/Imagess-1.jpg"
      />
      <section className="container mx-auto py-10">
        <div>
          {equipsData.length === 0 ? (
            <p>There are no equipments you have added.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {equipsData.map((element) => (
                <MyEquipCard
                  key={element._id}
                  element={element}
                  equipsData={equipsData}
                  setEquipsData={setEquipsData}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyEquipments;
