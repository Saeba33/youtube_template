import Header from "../Header";
import Filters from "../Filters";

export default function MasterHead() {
  return (
    <div className="fixed z-10 top-0 w-full h-[112px] backdrop-blur-[48px] bg-[var(--bg-header)]">
      <Header />
      <Filters />
    </div>
  );
}
