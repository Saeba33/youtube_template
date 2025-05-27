import CategoryButton from "../ui/CategoryButton";
import { categoryData } from "../data/categoryData";

export default function Filters() {
  return (
    <div className="flex flex-wrap w-full gap-3 py-3 overflow-hidden fixed top-[56px] left-[96px] z-5">
      {categoryData.map((filter) => (
        <CategoryButton
          key={filter.id}
          label={filter.label}
          isActive={filter.isActive}
        />
      ))}
    </div>
  );
}
