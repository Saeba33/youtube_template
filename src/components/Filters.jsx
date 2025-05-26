import CategoryButton from "../ui/CategoryButton";
import categoryData from "../data/categoryData";

export default function Filters() {
  return (
    <div className="flex gap-3 py-3 mx-2 overflow-hidden">
      {categoryData.map((filter) => (
        <CategoryButton key={filter.id} label={filter.label} isActive={filter.isActive} />
      ))}
    </div>
  );
}
