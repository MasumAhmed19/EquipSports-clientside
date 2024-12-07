import { Helmet } from "react-helmet-async";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>404 Error - EquiSports</title>
      </Helmet>
      <div className="bg-black  text-white min-h-screen flex items-center justify-center">
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="text-center flex flex-col items-center justify-center gap-5 p-5">
            <div className="opacity-20">
              <Link
                to="/"
                className="flex items-center gap-2"
              >
                <RiShoppingBag2Fill className="text-5xl text-p1" />{" "}
                <h4 className="text-5xl font-semibold">EquiSports</h4>
              </Link>
            </div>
            <h2 className=" text-8xl font-bold text-center duration-300 ease-in  rounded-md ">
              OOPS!
            </h2>
            <p className="">404 - page not found</p>
            <p className="md:w-2/3 ">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link to="/">
              <button className="btn1 text-black">Go to Homepage</button>
            </Link>
          </div>
          <h2 className="text-4xl md:text-6xl  md:w-2/3 text-center mx-auto"></h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
