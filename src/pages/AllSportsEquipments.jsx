import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import EquipCard from "../components/EquipCard";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const AllSportsEquipments = () => {
  const eData = useLoaderData();
  const [equipments, setEquipments] = useState(eData);
  const [sortOrder, setSortOrder] = useState('');

  const handleSort= (order)=>{
      console.log(order)
      const temp = [...equipments]; // Clone the array to avoid mutation

      if(order==='asc'){
        temp.sort((a,b)=>a?.price - b?.price)
      }else{
        temp.sort((a,b)=>b?.price - a?.price)
      }

      setEquipments(temp)
      
  }

  useEffect(()=>{
    if(sortOrder){
      handleSort(sortOrder);
    }
  },[sortOrder]);

  return (
    <>
      <Helmet>
        <title>All sports equipments - EquipSports</title>
      </Helmet>
      <Navbar />

      <section className=" min-h-[60vh] flex items-center justify-center">
        <Banner
          title="All Sports Equipment"
          description="Upload the equipment image, provide its name, select a category, set the price, rating, stock, and processing time. Add a description and customization options."
          buttonText="My Equipments"
          imageSrc="https://i.ibb.co.com/zHj7XdB/Imagess-1.jpg"
          to="/my-equipments"
        />
      </section>

      <section className="container mx-auto py-[50px]">
        <div className="text-center">
          <h2 className="p-5 text-center text-2xl font-semibold">
            All Sports Equipments: {equipments?.length}
          </h2>
          <p>
            Enhance your workout with premium fitness gear, including dumbbells,
            resistance bands, yoga mats, and more for strength, endurance, and
            flexibility training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5"></div>
        <div className="flex justify-between items-center shadow-md px-2 rounded-lg">
          <p>Sort By:</p>
          <div className="flex items-center justify-center">
            <select className="input1" value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
              <option value="" disabled>Default</option>
              <option value="asc">Price (Low to High)</option>
              <option value="desc">Price ( High to Low)</option>
            </select>
          </div>
        </div>

        {equipments && (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-base text-black">
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
                {equipments &&
                  equipments?.map((el, idx) => (
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
        )}
      </section>
      <Footer />
    </>
  );
};

export default AllSportsEquipments;
