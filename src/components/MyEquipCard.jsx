import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipCard = ({ element, equipsData, setEquipsData }) => {
  const { _id, name, category, price, rating, stock, imgurl, description } = element || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BDEC2F",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://equipsport-serverside.vercel.app/equipments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // Update state after successful deletion
              const updatedData = equipsData.filter((item) => item._id !== id);
              setEquipsData(updatedData);

              Swal.fire({
                title: "Deleted!",
                text: "Your equipment has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire("Error!", "Deletion failed. Try again.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting:", error);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <div className="bg-white rounded-lg border-2 border-p1">
      <img src={imgurl} alt={name} className="h-60 object-cover mx-auto" />
      <div className="p-6 space-y-4">
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
            <span className="font-semibold">⭐ {rating}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link to={`/update/${_id}`}>
            <button className="btn1 flex gap-2 items-center">
              Update <FaEdit className="hover:text-p1 duration-200 cursor-pointer" />
            </button>
          </Link>
          <button
            className="btn1 flex gap-2 items-center"
            onClick={() => handleDelete(_id)}
          >
            Delete <MdDelete className="hover:text-p1 duration-200 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEquipCard;
