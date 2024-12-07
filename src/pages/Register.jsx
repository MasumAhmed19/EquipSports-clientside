import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const navigate = useNavigate();

  const { createNewUser, updateUserProfileData } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    uppercase: false,
    lowercase: false,
    length: false,
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validate password function
  const validatePassword = (password) => {
    setPassword(password);
    setValidationErrors({
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      length: password.length >= 6,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photolink = form.photolink.value;
  
    createNewUser(email, password)
      .then((res) => {
        const cur_user = res.user;
        
        updateUserProfileData({
          displayName: name,
          photoURL: photolink,
        })
          .then(() => {
            console.log("User profile updated");
            navigate("/");
          })
          .catch((err) => {
            alert(err.message);
          });
  
        console.log(cur_user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  
  return (
    <>
      <Helmet>
        <title>Register - EquiSports</title>
      </Helmet>
      <Navbar />

      <div className="py-[50px] min-h-screen flex flex-col items-center">
        <div className="flex gap-5 items-center justify-center py-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `btn2 ${isActive ? "bg-p1" : "bg-gray-200"}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `btn2 ${isActive ? "bg-p1" : "bg-gray-200"}`
            }
          >
            Register
          </NavLink>
        </div>

        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-[50px]">
          <div className="flex justify-center">
            <img
              className="h-[60vh] rounded-xl"
              src="https://i.ibb.co/Nt7hrPM/Humaaan-3.png"
              alt="Hero"
            />
          </div>

          <div className="w-full bg-white shadow-xl rounded-lg p-8 text-gray-900">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 text-sm md:text-base"
            >
              <div className="form-control">
                {/* <label className="label text-gray-800">Name</label> */}
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input1"
                  required
                />
              </div>

              <div className="form-control">
                {/* <label className="label text-gray-800">Email</label> */}
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input1"
                  required
                />
              </div>

              <div className="form-control">
                {/* <label className="label text-gray-800">Photo URL</label> */}
                <input
                  name="photolink"
                  type="text"
                  placeholder="Your Photo URL"
                  className="input1"
                  required
                />
              </div>

              <div className="form-control">
                {/* <label className="label text-gray-800">Password</label> */}
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input1"
                    value={password}
                    onChange={(e) => validatePassword(e.target.value)}
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-4 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <div className="mt-2 text-xs flex gap-2">
                  {!validationErrors.uppercase && (
                    <span className="text-red-500">At least one uppercase</span>
                  )}
                  {!validationErrors.lowercase && (
                    <span className="text-red-500">At least one lowercase</span>
                  )}
                  {!validationErrors.length && (
                    <span className="text-red-500">At least 6 characters</span>
                  )}
                </div>
              </div>

              <button className="btn1 w-full">Sign Up</button>
            </form>

            <div className="divider my-6">OR</div>

            <div className="form-control mt-6 flex gap-2">
              <button className="btn1 flex items-center justify-center gap-3">
                <FcGoogle className="text-xl" />
                Continue with Google
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Register;
