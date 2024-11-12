import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CardCategory from "./components/CardCategory";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 w-full h-screen">
      <CardCategory number={10} name={"lorem"} />
    </div>
  );
}

export default App;
