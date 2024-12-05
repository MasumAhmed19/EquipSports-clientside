import { MdOutlineLightMode } from "react-icons/md";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  
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
          to="/my-equipments"
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
    <div className="navbar bg-base-100 py-[25px]">

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
        <MdOutlineLightMode />
        <Link
          to="/login"
          className="font-medium"
        >
          Login /
        </Link>
        <Link
          to="/register"
          className="font-medium"
          s
        >
          Register
        </Link>
      </div>
      
    </div>
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
