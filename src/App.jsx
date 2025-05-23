import Content from "./components/Content";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <div className="shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
