import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const EquipCard = ({ el, idx }) => {
    const {_id, name, category, price, rating, stock, pTime, imgurl, description, userName, userEmail} = el || {}
  
    return (
        <tr>
            <th>{idx+1}</th>
            <td>{name}</td>
            <td>{category}</td>
            <td>{rating}</td>
            <td>${price}</td>
            <td className="flex gap-4 text-xl ">
                <FaEye className="hover:text-p1 duration-200 cursor-pointer"/>
                <FaEdit className="hover:text-p1 duration-200 cursor-pointer"/>
                <MdDelete className="hover:text-p1 duration-200 cursor-pointer"/>
            </td>
        </tr>

    );
  };
  
  export default EquipCard;
  