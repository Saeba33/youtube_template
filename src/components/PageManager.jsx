import Filters from "./Filters";
import Content from "./Content";

export default function PageManager() {
  return (
    <main className="pt-35 mx-2">
      <Filters />
      <Content />
    </main>
  );
}
