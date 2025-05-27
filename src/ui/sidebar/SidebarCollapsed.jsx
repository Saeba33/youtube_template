import { sidebarData } from "../../data/sidebarData";
import SidebarNavIcon from "../../ui/SidebarNavIcon";


export default function SidebarCollapsed() {
  return (
    <aside className="fixed top-[56px]">
      {/* Section principale */}
      <div className="flex flex-col items-center">
        {sidebarData.mainSection.map((item) => (
          <SidebarNavIcon
            key={item.id}
            icon={item.icon}
            title={item.title}
            isActive={item.isActive}
          />
        ))}
      </div>
      {/* Section utilisateur */}
      <div className="flex flex-col items-center">
        {sidebarData.userSection.map((item) => (
          <SidebarNavIcon key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
    </aside>
  );
}