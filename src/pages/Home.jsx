import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Htitle from "../components/Htitle";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";

const Home = () => {
    return (
        <>
            <Helmet><title>Home - EquipSports</title></Helmet>
            {/* Header */}
                <Navbar />

            {/* Hero Section */}
            <section className="container mx-auto min-h-[90vh] py-[20px] md:py-[60px] flex items-center ">
                <HeroSection />
            </section>
            <section className="container mx-auto h-[20vh]">

                {/* <Htitle>gear up the things</Htitle> */}
            </section>

            {/* Product HighLight Section */}

            {/* Sports Category Section */}

            {/* Newsletter Section */}

            {/* Footer */}
            <Footer />


        </>
    );
};

export default Home;