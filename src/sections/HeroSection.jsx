const HeroSection = () => {
  return (
    <div className="flex flex-col gap-10 p-4">
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-wide">
        Gear up for Victory! Explore our<br></br> Selection of Sports Equipment
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex w-full">
          <img
            src="https://i.ibb.co.com/J5CX6Kw/Image.jpg"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <p className="">
            Gear up for greatness with premium sports gear! Explore cutting-edge
            tennis rackets, dynamic football essentials, and high-performance
            running shoes crafted to elevate your passion and fuel your
            discipline.
          </p>
          <div>
            <button className="btn1">Shop Now</button>
          </div>
          <img
            src="https://i.ibb.co.com/GWH555w/Image-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
