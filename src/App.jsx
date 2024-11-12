import { useState } from "react";
import TaskCard from "./components/TaskCard";
import SectionCards from "./components/SectionCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 w-full h-screen">
      <SectionCards />
    </div>
  );
}

export default App;
