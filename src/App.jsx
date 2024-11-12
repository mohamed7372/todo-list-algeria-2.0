import { useState } from "react";
import TaskCard from "./components/TaskCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 w-full h-screen">
      <TaskCard task="asdfasdf" />
    </div>
  );
}

export default App;
