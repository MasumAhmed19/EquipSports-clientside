import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const categories = [
  'Football',
  'Cricket',
  'Tennis',
  'Gym & Fitness',
  'Running',
  'Basketball',
];

const AddEquipmentsSection = () => {
  const [loading, setLoading] = useState(false);
  const {user} = useContext(AuthContext);


  const handleSubmit =  (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name= form.name.value;
    const category= form.category.value;
    const price= form.price.value;
    const rating= form.rating.value;
    const stock= form.stock.value;
    const pTime= form.pTime.value;
    const imgurl= form.imgurl.value;
    const description= form.description.value;
    const userName= user.displayName;
    const userEmail= user.email;


    const formdata = {
        name:name,
        category:category,
        price:price,
        rating:rating,
        stock:stock,
        pTime:pTime,
        imgurl:imgurl,
        description:description,
        userName:userName,
        userEmail:userEmail,

    }

    console.log(formdata)
    
    // TODO: Send data to backend
    fetch('http://localhost:8080/equipments', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata)
    }) 
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
          Swal.fire("Add Equipment successful!");
          form.reset();
      }
    })

    
  };

  return (
    <section className="">
      <div className="container mx-auto p-10">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Equipment</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">


            {/* Basic Info */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Item Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input1"
                  placeholder="e.g., Professional Badminton Racket"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  required
                  className="input1"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
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
                  required
                  min="0"
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
                  required
                  min="1"
                  className="input1"
                  placeholder="3"
                />
              </div>
            </div>

            {/* Img */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Image (Direct link)
              </label>
              <input
                  type="text"
                  name="imgurl"
                  required
                  min="0"
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
                required
                className="input1 border border-dashed"
                placeholder="Detailed description of the equipment..."
              />
            </div>
              
            <div className='py-[20px]'>
              <h2 className='text-2xl font-semibold'>User Info</h2>
              <div className='border border-dashed'></div>
            </div>

            {/* user information */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <div className="space-y-2">
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  readOnly
                  value={`${user?.displayName || "userName"} `}
                  className="input2"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                  User Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  readOnly
                  value={`${user?.email || "user@example.com"} `}
                  className="input2"
                />
              </div>
            </div>

            <div>
                <button className='btn1'>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEquipmentsSection;
