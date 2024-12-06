import { Link } from "react-router-dom";
import Htitle from "./Htitle";

const Banner = ({title, description, buttonText, imageSrc }) => {
    return (
        <div className="relative">
          <section className="container mx-auto ">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[400px] p-5 md:py-10">
              <div className="flex  flex-col gap-5">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <Htitle>
                    {title}
                  </Htitle>
                </h1>
                {description && (
                  <p className="">
                    {description}
                  </p>
                )}
                {buttonText && (
                    <Link to='/my-equipments'>
                        <button className="btn1">{buttonText}</button>
                    </Link>
                )}
              </div>
    
              <div className="relative h-[300px] lg:h-[400px] order-first lg:order-last">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img
                    src={imageSrc}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      );
};

export default Banner;