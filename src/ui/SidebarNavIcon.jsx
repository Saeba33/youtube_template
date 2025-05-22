export default function SidebarNavIcon({
  title,
  isActive
}) {
  return (
    <div
      className={`flex flex-col items-center gap-1 hover:bg-gray-100 cursor-pointer transition-all duration-150 p-4 rounded-lg ${
        isActive ? "bg-gray-100" : ""
      }`}
      title={title}
    >
      <Icon className="w-6 h-6 text-gray-800 flex-shrink-0" />
      <div className="text-xs text-gray-800 text-center leading-tight max-w-16 truncate">
        {title}
      </div>
    </div>
  );
}
