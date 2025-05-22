import { LuCircleUser } from "react-icons/lu";
import { sidebarData } from "../../data/sidebarData";
import SidebarNavItem from "../../ui/SidebarNavItem";


export default function Sidebar() {
  return (
    <aside className="w-60 bg-white h-screen overflow-y-auto scrollbar-thin">
      {/* Section principale */}
      <div className="py-3">
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
      <div className="border-t border-gray-200 my-3"></div>
      {/* Section utilisateur */}
      <div className="py-1">
        {sidebarData.userSection.map((item) => (
          <SidebarNavItem key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-3"></div>
      {/* Section de connexion */}
      <div className="px-4 py-4">
        <p className="text-sm text-gray-800 leading-5 mb-4">
          Connectez-vous pour accéder à vos vidéos, playlists et
          recommandations.
        </p>
        <button className="flex gap-2 items-center text-blue-600 border border-gray-300 rounded-full px-4 py-2 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 text-sm font-medium">
          <LuCircleUser className="w-5 h-5" />
          <span>Se connecter</span>
        </button>
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-3"></div>
      {/* Section Explorer */}
      <div className="py-1">
        <h3 className="px-4 py-2 text-base font-medium text-gray-800">
          {sidebarData.explorerSection.title}
        </h3>
        {sidebarData.explorerSection.items.map((item) => (
          <SidebarNavItem key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-3"></div>
      {/* Section YouTube Services */}
      <div className="py-1">
        <h3 className="px-4 py-2 text-base font-medium text-gray-800">
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
      <div className="border-t border-gray-200 my-3"></div>
      {/* Section Paramètres */}
      <div className="py-1">
        {sidebarData.settingsSection.map((item) => (
          <SidebarNavItem key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
      {/* Séparateur */}
      <div className="border-t border-gray-200 my-3"></div>
      {/* Footer */}
      <footer className="px-4 py-4">
        <div className="text-xs text-gray-600 leading-4"></div>
        <p className="text-xs text-gray-500 mt-3">© 2025 Google LLC</p>
      </footer>
    </aside>
  );
}
