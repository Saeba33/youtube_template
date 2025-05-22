export default function SidebarNavItem({
  title,
  icon,
  iconClass = "w-6 h-6",
  textColor = "text-gray-800",
  isActive = false,
}) {
  const Icon = icon;
  return (
    <div
      className={`flex items-center gap-6 hover:bg-gray-100 cursor-pointer transition-all duration-150 mx-3 px-3 py-2 rounded-lg ${
        isActive ? "bg-gray-100 font-medium" : ""
      }`}
    >
      <Icon className={`${iconClass} ${textColor} flex-shrink-0`} />
      <div className={`text-sm font-normal ${textColor} truncate`}>{title}</div>
    </div>
  );
}
