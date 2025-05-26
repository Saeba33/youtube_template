import { LuCircleUser } from "react-icons/lu";
import { sidebarData } from "../../data/sidebarData";
import SidebarNavItem from "../../ui/SidebarNavItem";
import { RxHamburgerMenu } from "react-icons/rx";



export default function Sidebar() {
  return (
    <aside className="w-60 h-screen ">
      {/* Section principale */}
              <div className="flex items-center px-4 gap-4 min-w-0">
                {/* Menu burger */}
                <button className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <RxHamburgerMenu className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-1 cursor-pointer">
                  {/* Logo */}
                  <img
                    src="src/images/logo.webp"
                    alt="logo"
                    className="w-auto h-24"
                  />
                </div>
              </div>
      <div className="py-3 sidebar-scrollbar">
        {sidebarData.mainSection.map((item) => (
          <SidebarNavItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            isActive={item.isActive}
          />
        ))}
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-2"></div>
      {/* Section utilisateur */}
      <div className="py-1">
        {sidebarData.userSection.map((item) => (
          <SidebarNavItem key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-2"></div>
      {/* Section de connexion */}
      <div className="py-2 px-5 flex flex-col">
        <p className="text-sm text-gray-800 leading-5 mb-4">
          Connectez-vous à Youtube pour cliquer sur "J'aime", ajouter un commentaire et vous abonner.
        </p>
        <button className="flex gap-2 items-center justify-center text-blue-600 border border-gray-300 rounded-full px-4 py-2 hover:bg-blue-50 hover:border-transparent text-sm font-medium">
          <LuCircleUser className="w-5 h-5" />
          <span>Se connecter</span>
        </button>
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-2"></div>
      {/* Section Explorer */}
      <div className="py-1">
        <h3 className="px-6 py-1 text-md font-medium text-gray-800">
          {sidebarData.explorerSection.title}
        </h3>
        {sidebarData.explorerSection.items.map((item) => (
          <SidebarNavItem key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-2"></div>
      {/* Section YouTube Services */}
      <div className="py-1">
        <h3 className="px-4 py-1 text-md font-semibold text-gray-800">
          {sidebarData.youtubeSection.title}
        </h3>
        {sidebarData.youtubeSection.items.map((item) => (
          <SidebarNavItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            textColor={item.textColor}
          />
        ))}
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-2"></div>
      {/* Section Paramètres */}
      <div className="py-1">
        {sidebarData.settingsSection.map((item) => (
          <SidebarNavItem key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-2"></div>
      {/* Footer */}
      <footer className="px-4 py-4">
        <div className="text-xs text-gray-600 leading-4"></div>
        <p className="text-xs text-gray-500 mt-3">© 2025 Google LLC</p>
      </footer>
    </aside>
  );
}
