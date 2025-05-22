export default function CategoryButton({ label, isActive }) {
  return (
    <button
      className={`
          px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0
          ${
            isActive
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 hover:border-gray-300"
          }
        `}
    >
      {label}
    </button>
  );
}
