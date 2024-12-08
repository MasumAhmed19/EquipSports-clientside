import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Htitle from "../components/Htitle";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import { Link } from "react-router-dom";
import SliderComp from "../components/SliderComp";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Home = () => {
  const {dark, toggleTheme}= useContext(ThemeContext)


  
  return (
    <>
      <Helmet>
        <title>Home - EquipSports</title>
      </Helmet>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="dark:bg-black">
        <div className="container mx-auto min-h-[90vh] py-[20px] md:py-[60px] flex items-center ">
          <HeroSection />
        </div>
      </section>

      {/* sponsors */}
      <section className="bg-[#F6F6F4] dark:d1 py-[70px] g2">
        <div className="container mx-auto flex flex-col gap-5">
          <h2 className="text-center text-2xl font-semibold dark:text-white">
            Our Sponsors and Collaborators
          </h2>
          <div className="">
            <div className="flex justify-between flex-wrap gap-5">
              <img
                src="https://websitedemos.net/sports-store-04/wp-content/uploads/sites/1401/2023/10/Group-8.png"
                alt=""
              />
              <img
                src="https://websitedemos.net/sports-store-04/wp-content/uploads/sites/1401/2023/10/Group-7.png"
                alt=""
              />
              <img
                src="https://websitedemos.net/sports-store-04/wp-content/uploads/sites/1401/2023/10/Group-8.png"
                alt=""
              />
              <img
                src="https://websitedemos.net/sports-store-04/wp-content/uploads/sites/1401/2023/10/Group-7.png"
                alt=""
              />
              <img
                src="https://websitedemos.net/sports-store-04/wp-content/uploads/sites/1401/2023/10/Group-8.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product HighLight Section */}
      <section className="dark:bg-black">
        <section className="py-[70px]  container mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main image with hover effects */}
            <div className="flex-1 relative group overflow-hidden">
              <img
                src="https://websitedemos.net/sports-store-04/wp-content/uploads/sites/1401/2023/10/Image-2.jpg"
                alt="Tennis Equipment"
                className="img1"
              />
              <h2 className="absolute bottom-10 left-10 text-xl font-bold text-white">
                Tennis Equipments
              </h2>
            </div>

            {/* Additional images section */}
            <div className="flex flex-col gap-10 lg:w-1/2">
              {/* Image 1 */}
              <div className="flex-1 relative group overflow-hidden">
                <img
                  src="https://websitedemos.net/sports-store-04/wp-content/uploads/sites/1401/2023/10/Image-2-1.jpg"
                  alt="Equipment 1"
                  className="img1"
                />
                <h2 className="absolute bottom-10 left-10 text-xl font-bold text-white">
                  Tennis Equipments
                </h2>
              </div>

              {/* Image 2 */}
              <div className="flex-1 relative group overflow-hidden">
                <img
                  src="https://websitedemos.net/sports-store-04/wp-content/uploads/sites/1401/2023/10/Image-1-1.jpg"
                  alt="Equipment 2"
                  className="img1"
                />
                <h2 className="absolute bottom-10 left-10 text-xl font-bold text-white">
                  Tennis Equipments
                </h2>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Trending Now */}
      <section className="dark:bg-black">
        <section className="py-[70px] container mx-auto">
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold dark:text-white">Trending now</h2>
            <Link to="/all-sports-equipment">
              <button className="btn1">View All</button>
            </Link>
          </div>
          <SliderComp />


        </section>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
