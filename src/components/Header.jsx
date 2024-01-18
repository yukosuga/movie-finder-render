import logo from "../assets/images/logo-movie.png";
import {HiHome, HiMagnifyingGlass, HiStar, HiTv} from "react-icons/hi2";
import {BiSolidCameraMovie} from "react-icons/bi";
import {RiMovieFill} from "react-icons/ri";
import {HiDotsVertical} from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import avatar from "../assets/images/avatar.png";
import {useState} from "react";

function Header() {
  const [toggle, setToggle] = useState(true);
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Watch List",
      icon: HiStar,
    },
    {
      name: "Original",
      icon: RiMovieFill,
    },
    {
      name: "Movies",
      icon: BiSolidCameraMovie,
    },
    {
      name: "Series",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex justify-between items-center px-9 py-5 md:p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[100px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle && (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem key={index} name={item.name} Icon={item.icon} />
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div>
        <img
          src={avatar}
          alt="Avatar"
          className="w-[25px] h-[25px] md:w-[50px] md:h-[50px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
