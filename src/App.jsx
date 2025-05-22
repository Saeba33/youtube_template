import Content from "./components/Content";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
