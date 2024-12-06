import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import EquipCard from "../components/EquipCard";
import { useState } from "react";

const AllSportsEquipments = () => {
  const eData = useLoaderData();

  const [equipments, setEquipments]= useState(eData);

  return (
    <div>
      <section className="container mx-auto">
        <Navbar />
      </section>

      <section className="g1 min-h-[60vh] flex items-center justify-center">
        <Banner
          title="All Sports Equipment"
          description="Upload the equipment image, provide its name, select a category, set the price, rating, stock, and processing time. Add a description and customization options."
          buttonText="My Equipments"
          imageSrc="https://i.ibb.co.com/zHj7XdB/Imagess-1.jpg"
        />
      </section>

      <section className="container mx-auto py-[50px]">
        <h2 className="p-5">All Sports Equipments: {equipments.length}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
          
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {equipments.map((el, idx) => (
                    <EquipCard
                    key={el?._id}
                    el={el}
                    idx={idx}
                    equipments={equipments}
                    setEquipments={setEquipments}
                    />
                ))}
              
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllSportsEquipments;
