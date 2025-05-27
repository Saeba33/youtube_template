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
      className={` flex flex-col mx-1 py-4 items-center hover:bg-gray-100 cursor-pointer rounded-lg ${
        isActive ? "" : ""
      }`}
    >
      <Icon className={`${iconClass} ${textColor}`} />
      <div className="text-[10px] pt-1 font-normal">{title}</div>
    </div>
  );
}
