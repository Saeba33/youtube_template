export default function SidebarNavIcon({
  title,
  icon,
  iconClass = "w-6 h-6",
  textColor = "text-gray-800",
  isActive,
}) {
  const Icon = icon;
  return (
    <div
      className={` flex flex-col w-fit p-2 items-center gap-2 hover:bg-gray-100 cursor-pointer rounded-lg ${
        isActive ? "bg-gray-100 font-medium" : ""
      }`}
    >
      <Icon className={`${iconClass} ${textColor}`} />
      <div className="text-xs font-normal">{title}</div>
    </div>
  );
}
