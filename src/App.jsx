import Content from "./components/Content";
import Sidebar from "./components/layout/Sidebar";
//import VideoDetails from "./components/VideoDetails";
import MasterHead from "./components/layout/MasterHead";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <div className=" bg-white top-0 z-50">
          <Sidebar />
        </div>

        <div className="flex flex-col pt-35">
          <MasterHead />
          <div className="mx-6">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
