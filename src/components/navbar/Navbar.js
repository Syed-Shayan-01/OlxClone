import { useState } from "react";
import Logo from "../Logo/logo";
import Logo2 from "../Logo2/Logo2";
import List from "../list/list";
import {
  AiFillCloseCircle,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import Link from "next/link";
import { BsBuildings } from "react-icons/bs";
import { LiaCarSolid } from "react-icons/lia";
const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <header>
        <nav className="flex max-sm:shadow-sm items-center justify-between flex-wrap">
          <div className=" ml-2 md:hidden">
            <button
              onClick={() => setopen(!open)}
              className="flex items-center rounded text-black-500 hover:text-black-400"
            >
              <ol>
                <li>
                  <AiOutlineMenu
                    className={`text-black font-semibold text-lg hover:text-blue-400 ${
                      open ? "hidden" : "block"
                    }`}
                  />
                </li>
                <li>
                  <AiFillCloseCircle
                    className={`text-black font-semibold text-lg hover:text-blue-400 ${
                      open ? "block" : "hidden"
                    }`}
                  />
                </li>
              </ol>
            </button>
          </div>

          <div className="flex items-center p-2">
            <span className="mx-8">
              <Logo />
            </span>
            <span className="text-lg bg-gray-100 p-2 rounded-3xl">
              <LiaCarSolid />
            </span>
            <span className="ml-2 md:mr-20 mr-6 max-sm:text-sm hover:text-blue-500">
              <List itemtxt={"MOTORS"} />
            </span>

            <span className="text-lg bg-gray-100 p-2 rounded-3xl">
              <BsBuildings />
            </span>
            <span className="ml-2 mr-4 max-sm:text-sm hover:text-blue-500">
              <List itemtxt={"PROPERTY"} />
            </span>
          </div>

          {open && (
            <div
              className={`w-full block  lg:flex lg:items-center lg:w-auto ${
                open ? "block" : "hidden"
              }`}
            >
              <div className="flex max-md:flex-col lg:flex-grow">
                <Link href={""} className=" shadow-inner">
                  <List itemtxt={"Dashboard"} />
                </Link>
                <Link href={""} className=" shadow-inner">
                  <List itemtxt={"Home"} />
                </Link>
                <List itemtxt={"Products"} />
              </div>
            </div>
          )}
        </nav>
      </header>

      <nav className="flex items-center">
        <div className="ml-10">
          <Logo2 />
        </div>
        <div className="text-lg flex items-center">
          <input
            type="text"
            name="city"
            id="city"
            className="border-black border-[2px]
                     rounded py-2 pl-4 focus:outline-teal-500 w-72 mr-4"
          />
          <input
            type="search"
            name="default-Search"
            id="search"
            className="border-black border-[2px]
                      py-2 pl-4 w-[40rem]  focus:outline-teal-500 rounded-l-md"
          />
          <span className=" bg-black py-3 text-white text-2xl font-bold px-3  cursor-pointer">
            <AiOutlineSearch />
          </span>
        </div>
        <div className="md:ml-4 md:font-bold font-sans">
            <List itemtxt={'Login'} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
