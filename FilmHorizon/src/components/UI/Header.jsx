import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function HandleHamburger() {
    setIsOpen(!isOpen);
  }

  return (
    <header className=" w-full sticky top-0 z-20  bg-white md:shadow-md  ">
      <div className="container flex justify-between ">

        <div>
          <h1 className="text-4xl sm:text-5xl ">FILM HORIZON</h1>
        </div>
        <div className="flex gap-7 items-center">
          <NavLink
            to={"/favourites"}
            className="text-4xl text-red-600 sm:text-5xl"
          >
            {" "}
            <FaHeart />{" "}
          </NavLink>
          <button
            onClick={HandleHamburger}
            className="text-4xl sm:text-5xl lg:hidden "
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute right-8 top-15  text-3xl rounded-2xl  shadow-xl md:top-25 lg:flex  lg:top-0 lg:right-30 lg:shadow-none lg:rounded-nonw`}
        >
          <ul className="w-[100px] flex flex-col gap-3 bg-white rounded-3xl ham-p md:w-[130px] md:text-4xl lg:relative lg:flex-row lg:gap-10  lg:w-[40rem]">
            <li className="border-b-[1px]  lg:border-none lg:text-4xl lg:hover:scale-none  hover:scale-[1.1] ">
              {" "}
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="border-b-[1px] lg:border-none lg:text-4xl lg:hover:scale-none  hover:scale-[1.1] ">
              {" "}
              <NavLink to={"/search"}>Search</NavLink>
            </li>
            <li className="border-b-[1px] lg:border-none lg:text-4xl lg:hover:scale-none   hover:scale-[1.1] ">
              {" "}
              <NavLink to={"/movies"}>Movies</NavLink>
            </li>
            <li className=" lg:border-none lg:text-4xl lg:hover:scale-none   hover:scale-[1.1] ">
              {" "}
              <NavLink to={"/tvshows"}>TV Shows</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
