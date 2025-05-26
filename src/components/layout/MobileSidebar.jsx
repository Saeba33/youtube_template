import { sidebarData } from "../../data/sidebarData";
import SidebarNavIcon from "../../ui/SidebarNavIcon";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileSidebar() {
  return (
    <aside className="max-w-fit h-screen ">
      {/* Section principale */}
      <div className="flex items-center px-4 gap-4 min-w-0">
        {/* Menu burger */}
        <button className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <RxHamburgerMenu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          {/* Logo */}
          <img src="src/images/logo.webp" alt="logo" className="w-auto h-24" />
        </div>
      </div>
      <div className="flex flex-col items- w-20 gap-8">
        <div className="flex flex-col gap-8">
          {sidebarData.mainSection.map((item) => (
            <SidebarNavIcon
              key={item.id}
              icon={item.icon}
              title={item.title}
              isActive={item.isActive}
            />
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {sidebarData.userSection.map((item) => (
            <SidebarNavIcon key={item.id} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </aside>
  );
}
