import { useState } from "react";
import HomePage from "./pages/HomePage";
import Sidebar from "./layout/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 w-full h-screen grid grid-cols-12">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9 px-20 py-16 box-border">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
