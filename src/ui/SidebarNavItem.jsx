export default function SidebarNavItem({
  title,
  icon,
  iconClass = "w-6 h-6",
  textColor = "text-gray-800",
  isActive,
}) {
  const Icon = icon;
  return (
    <div
      className={`flex items-center gap-6 hover:bg-gray-100 cursor-pointer mx-3 px-3 py-2 rounded-lg ${
        isActive ? "bg-gray-100 font-medium" : ""
      }`}
    >
      <Icon className={`${iconClass} ${textColor} flex-shrink-0`} />
      <div className={`text-sm font-normal truncate`}>{title}</div>
    </div>
  );
}
