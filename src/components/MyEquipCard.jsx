import { Link } from "react-router-dom";

const MyEquipCard = ({ element }) => {
    const {_id, name, category, price, rating, stock, pTime, imgurl, description } = element || {};
  
    return (
      <div className="bg-white  rounded-lg border-2 border-p1">
        <img
          src={imgurl}
          alt={name}
          className="h-60 object-cover mx-auto"
        />
        <div className="p-6 space-y-4 g2">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 line-clamp-3">{description}</p>
  
          <div className="flex justify-between items-center text-gray-700">
            <span className="font-semibold bg-p1 px-[10px] rounded-xl">{category}</span> 
            <div className="flex gap-2 items-center text-gray-700">
                <span className="font-semibold">Price:</span> ${price}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center text-gray-700">
                <span className="font-semibold">Stock:</span> {stock}
            </div>
    
            <div className="flex gap-2 items-center text-gray-700">
                <span className="font-semibold">⭐ {rating}s</span> 
            </div>
          </div>
  
          
  

            {/* <Link to={`/details/${_id}`} className="btn1">
              View Details
            </Link> */}

        </div>
      </div>
    );
  };
  
  export default MyEquipCard;
  