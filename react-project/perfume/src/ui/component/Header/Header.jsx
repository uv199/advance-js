import { Navbar, NavbarBrand, NavbarCollapse } from "flowbite-react";
import logo from "../../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { LogIn, Search, ShoppingCart, Truck } from "react-feather";
import { useCookies } from "react-cookie";

export default function Header() {
  const navigate = useNavigate();

  let [cookie, setCookie] = useCookies(["token"]);
  console.log("-----------  cookie----------->", cookie?.user?.userType);

  return (
    <Navbar fluid rounded className="m-0  py-4 border-b">
      <NavbarBrand className="pl-10">
        <img src={logo} className="mr-3 h-[70px]" alt="Flowbite React Logo" />
      </NavbarBrand>

      <NavbarCollapse>
        <div className="w-[500px] ">
          {cookie?.user?.userType !== "admin" && (
            <div className="flex justify-center focus-within:border-gray-400 text-gray-400 border-2 border-gray-300 items-center p-0 m-0 bg-white rounded-3xl px-3 overflow-hidden  mb-3 ">
              <input
                type="text"
                placeholder="search your fragrance here..."
                className="placeholder-gray-300 focus:ring-0 border-none w-full p-1 rounded-l-3xl"
              />
              <Search className="text-gray-400 rounded-r-3xl" />
            </div>
          )}

          <div className="flex justify-between [&_*]:font-bold [&_*]:text-gray-500">
            {cookie?.user?.userType === "admin" ? (
              <>
                <NavLink to="/admin-product">Product</NavLink>
                <NavLink to="/admin-order">Order</NavLink>
                <NavLink to="/admin-user">User</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Services</NavLink>
                <NavLink to="/">Pricing</NavLink>
                <NavLink to="/">Contact</NavLink>
              </>
            )}
          </div>
        </div>
      </NavbarCollapse>
      <div className="flex items-center [&_*]:mr-5 text-gray-400">
        {cookie?.token ? (
          <img
            src={logo}
            alt=""
            onClick={() => navigate("/profile")}
            className="cursor-pointer w-[30px] h-[30px] rounded-3xl  border border-gray-500"
          />
        ) : (
          <LogIn
            className="cursor-pointer"
            onClick={() => navigate("/login")}
          />
        )}
        {cookie?.user?.userType !== "admin" && (
          <>
            <ShoppingCart className="cursor-pointer" />
            <Truck className="cursor-pointer" />
          </>
        )}
      </div>
    </Navbar>
  );
}
