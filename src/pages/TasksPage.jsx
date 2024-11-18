import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const TasksPage = () => {
  const totalTask = 5;

  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setCount((c) => {
        if (c >= totalTask) {
          clearInterval(intervalTask);
          navigate("/");
        }
        return c + 1;
      });
    }, 1000);

    // clean up
    return () => clearInterval(intervalTask);
  }, []);

  return (
    <main className="w-full h-full flex items-center justify-center">
      <div>
        <Loader />
        <p className="font-semibold mt-10 text-xl">Load task {count} ...</p>
      </div>
    </main>
  );
};

export default TasksPage;
