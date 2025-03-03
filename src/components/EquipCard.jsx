import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const EquipCard = ({ el, idx, equipments, setEquipments}) => {
    const {_id, name, category, price, rating, stock, pTime, imgurl, description, userName, userEmail} = el || {};

    
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
            // deletion
            fetch(`https://equipsport-serverside.vercel.app/equipments/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                const newData = equipments.filter((elem) => elem?._id !== id);
                setEquipments(newData);
      
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              })
          }
        });
      };
      

    return (
        <tr className="hover:bg-gray-100">
            <th>{idx+1}</th>
            <td>{name}</td>
            <td>{category}</td>
            <td>{rating}</td>
            <td>${price}</td>
            <td className="flex gap-4 text-xl ">
                <Link to={`/details/${_id}`}>
                    <FaEye className="hover:text-p1 duration-200 cursor-pointer"/>
                </Link>
                <Link to={`/update/${_id}`}>
                    <FaEdit  className="hover:text-p1 duration-200 cursor-pointer"/>
                </Link>
                <MdDelete onClick={()=>handleDelete(_id)} className="hover:text-p1 duration-200 cursor-pointer"/>
            </td>
        </tr>

    );
  };
  
  export default EquipCard;
  