import Content from "./components/Content";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import PageManager from "./components/PageManager";
//import VideoDetails from "./components/VideoDetails";
//import Filters from "./components/Filters";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <div className=" bg-white top-0 z-50">
          <Sidebar />
        </div>

        <div className="flex flex-col">
          <div className="z-10">
            <Header />
           {/* <Filters /> */}
          </div>
          <div className="ml-60">
            <PageManager/>
             {/*<Content /><VideoDetails/>*/}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
