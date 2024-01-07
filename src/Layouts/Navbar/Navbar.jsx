import { NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/Bs";
import { CiSearch } from "react-icons/ci";
import 'typeface-maven-pro';


const Navbar = () => {
  return (
    <div className="navbar justify-between">
      <div>
      <h1 className="font-maven-pro -ml-4 mr-4 text-2xl md:text-4xl font-bold">
        pti.
      </h1>
      </div>
      <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
  <div className="form-control w-[12rem] md:w-[30rem] relative">
    <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#FE834C]" />
    <input
      type="text"
      placeholder="Search Audio book"
      className="input pl-10 bg-slate-100" // Add padding to accommodate the icon
    />
  </div>
</div>

        <ul className="menu  menu-horizontal px-1">
          <li>
            <details>
              <summary className="border-2 px-10 py-3  text-[#FE834C] font-bold pr-4">
                MENU
              </summary>
              <ul className="p-2 rounded-xl md:w-[10rem]">
                <li className="">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FE834C] bg-white"
                        : "text-black bg-white"
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FE834C] bg-white"
                        : "text-black bg-white"
                    }
                    to={"/details"}
                  >
                    Details
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FE834C] bg-white"
                        : "text-black bg-white"
                    }
                    to={"/category"}
                  >
                    Category
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FE834C] bg-white"
                        : "text-black bg-white"
                    }
                    to={"/favorite"}
                  >
                    My Favorites
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#FE834C] bg-white"
                        : "text-black bg-white"
                    }
                    to={"/profile"}
                  >
                    Profile
                  </NavLink>
                </li>
                <div className="flex justify-center items-center bg-white">
                  <li className="">
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#FE834C] bg-white"
                          : "text-black bg-white"
                      }
                      to={"/login"}
                    >
                      Log In
                    </NavLink>
                  </li>{" "}
                  /
                  <li className="">
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#FE834C] bg-white"
                          : "text-black bg-white"
                      }
                      to={"/register"}
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </div>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <BsPersonCircle className="text-3xl mr-2 border-0 hidden lg:flex text-[#FE834C]"></BsPersonCircle>
    </div>
  );
};

export default Navbar;
