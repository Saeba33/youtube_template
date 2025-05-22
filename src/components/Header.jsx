import { LuCircleUser } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidMicrophone } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <>
      <header className="flex items-center w-full justify-between px-5 ">
        <div className="flex">
          <button className="">
<RxHamburgerMenu className="w-6 h-6"/>
          </button>
          <button>
            <img src="src/images/logo.webp" alt="logo" />
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex items-center w-full text-lg pr-4">
            <input
              type="text"
              placeholder="Rechercher"
              size="50"
              className="border-b border-t border-l border-gray-400 rounded-l-full px-4 py-2"
            />
            <button className="border border-gray-400 bg-gray-100 rounded-r-full px-4 py-3">
              <IoSearch />
            </button>
          </div>
          <button className="flex items-center justify-center rounded-full bg-gray-100 p-2 w-10 h-10 hover:bg-gray-300">
            <BiSolidMicrophone className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <BsThreeDotsVertical className="w-5 h-5"/>
          </div>
          <div className="flex gap-2 items-center text-blue-600 border border-gray-200 rounded-full px-3 py-2 hover:bg-blue-50 hover:border-transparent">
            <div >
              <LuCircleUser className="w-6 h-6 font-light"/>
            </div>
            <div className="font-semibold">Se connecter</div>
          </div>
        </div>
      </header>
    </>
  );
}
