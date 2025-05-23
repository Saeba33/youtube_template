import { BiSolidMicrophone } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuCircleUser } from "react-icons/lu";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 bg-white sticky top-0 z-50 ">
      {/* Section gauche - Menu et logo */}
      <div className="flex items-center gap-4 min-w-0">
        {/* Menu burger */}
        <button className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <RxHamburgerMenu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          {/* Logo */}
          <img src="src/images/logo.webp" alt="logo" className="w-auto h-24" />
        </div>
      </div>
      {/* Section centrale - Barre de recherche */}
      <div className="flex items-center justify-center flex-1 max-w-2xl mx-4">
        <div className="flex items-center w-full max-w-md">
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Rechercher"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:border-blue-500  outline-none"
            />
            <button className="px-6 py-2 border border-l-0 border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-r-full cursor-pointer">
              <IoSearch className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          {/* Recherche vocale */}
          <button className="ml-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
            <BiSolidMicrophone className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      {/* Section droite - Actions utilisateur */}
      <div className="flex items-center gap-2">
        {/* Options */}
        <button className="p-2 rounded-full cursor-pointer ">
          <BsThreeDotsVertical className="w-5 h-5 text-gray-600" />
        </button>
        {/* Connexion */}
        <button className="flex gap-2 items-center text-blue-600 border border-gray-300 rounded-full px-3 py-1.5 hover:bg-blue-50 hover:border-transparent ml-2 cursor-pointer">
          <LuCircleUser className="w-6 h-6" />
          <span className="font-medium text-sm">Se connecter</span>
        </button>
      </div>
    </header>
  );
}
