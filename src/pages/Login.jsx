import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const {user, setUser, userLogin, loginGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    userLogin(email, password)
      .then((res) => {
        navigate('/');
        setUser(res.user);
        toast.success("Login Successful!");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.warn('Invalid email or password');
      });
  };

  const handleGoogleLogin=()=>{
      loginGoogle()
      navigate('/');
  }

  return (
    <>
      <Helmet>
        <title>Login - EquiSports</title>
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
          {/* Login Form */}
          <div className="w-full bg-white shadow-xl rounded-lg p-8 text-gray-900 order-2 md:order-1">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 text-sm md:text-base"
            >
              <div className="form-control">
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input1"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-control">
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input1"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-4 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <button className="btn1 w-full">Log In</button>
            </form>

            <div className="divider my-6">OR</div>

            <div className="form-control mt-6" onClick={()=>handleGoogleLogin()}>
              <button  className="btn1 flex items-center justify-center gap-3">
                <FcGoogle className="text-xl" />
                Continue with Google
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              className="h-[60vh] rounded-xl"
              src="https://i.ibb.co.com/f28Z5nf/Humaaan-4.png"
              alt="Hero"
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Login;
