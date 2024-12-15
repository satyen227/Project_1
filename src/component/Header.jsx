import React from "react";
import logo from "./../assets/logo-d-plus.svg";
import profile from "./../assets/profile.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  // const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center gap-8 justify-between">
      {/* Left Section */}
      <div className="flex gap-8 items-center">
        <img src={logo} alt="Logo" className="w-[80px] md:w-[115px]" />
        <div className="flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={""} name={item.name} Icon={item.icon} />
              )
          )}
          <div className="md:hidden">
            <HeaderItem name={""} Icon={HiDotsVertical} />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <img src={profile} alt="User Profile" className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;
