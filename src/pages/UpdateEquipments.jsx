import { useContext, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const categories = [
  "Football",
  "Cricket",
  "Tennis",
  "Gym & Fitness",
  "Running",
  "Basketball",
];

const UpdateEquipments = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const singleData = useLoaderData();

  const {
    _id,
    name,
    category,
    price,
    rating,
    stock,
    pTime,
    imgurl,
    description,
    userName,
    userEmail,
  } = singleData || {};

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    console.log(updatedData);

    fetch(`https://equipsport-serverside.vercel.app/equipments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Data updated successfully!");
        navigate("/all-sports-equipment");
      });
  };

  return (
    <section>
      <Navbar />

      <div className="container mx-auto p-10">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Update Equipment
          </h1>

          <form
            onSubmit={handleUpdate}
            className="space-y-6"
          >
            {/* Basic Info */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Item Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  required
                  className="input1"
                  placeholder="e.g., Professional Badminton Racket"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  required
                  className="input1"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option
                      key={cat}
                      value={cat}
                    >
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  required
                  className="input1"
                  placeholder="99.99"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  required
                  min="1"
                  max="5"
                  step="0.1"
                  className="input1"
                  placeholder="4.5"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  defaultValue={stock}
                  required
                  className="input1"
                  placeholder="100"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Processing Time (days)
                </label>
                <input
                  type="number"
                  name="pTime"
                  defaultValue={pTime}
                  required
                  className="input1"
                  placeholder="3"
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Image (Direct link)
              </label>
              <input
                type="text"
                name="imgurl"
                defaultValue={imgurl}
                required
                className="input1"
                placeholder="https://i.ibb.co.com/J5CX6Kw/Image.jpg"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                rows={4}
                defaultValue={description}
                required
                className="input1 border border-dashed"
                placeholder="Detailed description of the equipment..."
              />
            </div>

            {/* User Info */}
            <div className="py-6">
              <h2 className="text-2xl font-semibold">User Info</h2>
              <div className="border border-dashed"></div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  defaultValue={userName}
                  readOnly
                  className="input1"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  User Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  defaultValue={userEmail}
                  readOnly
                  className="input1"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="btn1"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default UpdateEquipments;
