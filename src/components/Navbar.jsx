import { useContext } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const link = (
    <>
      <li className="text-black hover:text-p1 duration-500">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeNav" : "flex items-center"
          }
        >
          <h2>Home</h2>
        </NavLink>
      </li>

      <li className="text-black hover:text-p1  duration-500 ">
        <NavLink
          to="/all-sports-equipment"
          className={({ isActive }) =>
            isActive ? "activeNav" : "flex items-center"
          }
        >
          <h2>All Sports Equipment</h2>
        </NavLink>
      </li>

      <li className="text-black hover:text-p1  duration-500 ">
        <NavLink
          to="/add-equipment"
          className={({ isActive }) =>
            isActive ? "activeNav" : "flex items-center"
          }
        >
          <h2>Add Equipment</h2>
        </NavLink>
      </li>

      <li className="text-black hover:text-p1 duration-500 ">
        <NavLink
          to={`/my-equipments/${user?.email}`}
          className={({ isActive }) =>
            isActive ? "activeNav" : "flex items-center"
          }
        >
          <h2>My Equipments</h2>
        </NavLink>
      </li>
    </>
  );

  return (
    <section className="g3">
      <div className="container mx-auto">
        <div className="navbar py-[25px]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <div className="">
              <Link
                to="/"
                className="flex items-center gap-2"
              >
                <RiShoppingBag2Fill className="text-2xl text-p1" />{" "}
                <h4 className="text-xl font-semibold">EquiSports</h4>
              </Link>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal space-x-10  px-1">{link}</ul>
          </div>

          <div className="navbar-end space-x-2">
            <MdOutlineLightMode className="cursor-pointer" />
            <div className="flex gap-2 items-center justify-center py-4">
              {user ? (
                <>
                  <div
                    className="tooltip hover:tooltip-open tooltip-left"
                    data-tip={user?.displayName}
                  >
                    {user && user?.email ? (
                      <img
                        src={user?.photoURL}
                        className="w-[40px] h-[40px] object-cover border-2 border-[#BDED4F] rounded-full"
                        alt="profile image"
                      />
                    ) : (
                      <FaUserAlt className="text-md text-[#BDED4F]" />
                    )}
                  </div>
                  {/* {user && <h2>{user.displayName}</h2>} */}

                  <NavLink
                    onClick={() => logOut()}
                    className={({ isActive }) =>
                      `${
                        isActive ? "underline underline-offset-4 decoration-p2" : ""
                      }`
                    }
                  >
                    Logout
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `${
                        isActive ? "underline underline-offset-4 decoration-p2" : ""
                      }`
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `${
                        isActive ? "underline underline-offset-4 decoration-p2" : ""
                      }`
                    }
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

{
  /* <div className="dropdown dropdown-end">
  <div
    tabIndex={0}
    role="button"
    className="btn btn-ghost btn-circle avatar"
  >
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS Navbar component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      />
    </div>
  </div>
  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
  >
    <li>
      <a className="justify-between">
        Profile
        <span className="badge">New</span>
      </a>
    </li>
    <li>
      <a>Settings</a>
    </li>
    <li>
      <a>Logout</a>
    </li>
  </ul>
</div>; */
}
