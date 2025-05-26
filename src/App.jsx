import Content from "./components/Content";
import Header from "./components/layout/Header";
import MobileSidebar from "./components/layout/MobileSidebar";
import Sidebar from "./components/layout/Sidebar";
import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <div className="fixed bg-white top-0 z-50">
          <Sidebar />
        </div>

        <div className="flex flex-col ml-60">
          <div className="sticky top-0 z-50 w-full  bg-white/95">
            <Header />
          </div>
          <Content />
          <MobileSidebar />
          <VideoDetails/>
        </div>
      </div>
    </div>
  );
}

export default App;
