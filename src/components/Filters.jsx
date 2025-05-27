import CategoryButton from "../ui/CategoryButton";
import { categoryData } from "../data/categoryData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Filters() {
  return (
    <div className="fixed flex items-center gap-3 w-250 top-[56px] left-[96px] z-5">      


        
        <button className="  bg-blue-500 p-2 rounded-full cursor-pointer">
          <FaChevronLeft />
        </button>

        <div className="flex gap-3 py-3">
          {categoryData.map((filter) => (
            <CategoryButton
              key={filter.id}
              label={filter.label}
              isActive={filter.isActive}
            />
          ))}
        </div>

        <button
          className="bg-green-500 p-2 rounded-full cursor-pointer">
          <FaChevronRight />
        </button>
</div>
  );
}
