const Htitle = ({ children }) => {
    return (
      <div className="relative">
        <h2 className="absolute bottom-0 text-4xl sm:text-3xl md:text-5xl lg:text-6xl">
            <span className="relative z-50">
            {children}
            </span>
            <div className="bg-p1 h-[20px] w-full absolute bottom-0"></div>
        </h2>
      </div>
    );
  };
  
  export default Htitle;
  