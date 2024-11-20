import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../contexts/TaskContext";

const TasksPage = () => {
  const totalTask = 8;

  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const { dispatch } = useContext(TaskContext);

  const homework = [
    {
      id: 1,
      title: "create Theme context (+20 pts)",
      color: "#936ED4",
      isCheck: false,
    },
    {
      id: 2,
      title: "create Language context (+20 pts)",
      color: "#A0DEEE",
      isCheck: false,
    },
    {
      id: 3,
      title: "create Category context (+30 pts)",
      color: "#86CBED",
      isCheck: false,
    },
    {
      id: 4,
      title: "make search by name task (+10 pts)",
      color: "#FADADE",
      isCheck: false,
    },
    {
      id: 5,
      title: "remove task (+5 pts)",
      color: "#F0B0BC",
      isCheck: false,
    },
    {
      id: 6,
      title: "create page settings (+15 pts)",
      color: "#F48BA9",
      isCheck: false,
    },
    {
      id: 7,
      title: "create page categories (+15 pts)",
      color: "#EE8C2C",
      isCheck: false,
    },
    {
      id: 8,
      title: "create modal add new category (+25 pts)",
      color: "#EEAD1A",
      isCheck: false,
    },
  ];

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setCount((c) => {
        if (c >= totalTask) {
          clearInterval(intervalTask);
          navigate("/");
        }
        return c + 1;
      });
    }, 500);

    // clean up
    return () => clearInterval(intervalTask);
  }, []);

  useEffect(() => {
    if (count > 0 && count < 9) {
      dispatch({
        type: "ADD_TASK",
        task: {
          title: homework[count - 1].title,
          color: homework[count - 1].color,
        },
      });
    }
  }, [count]);

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
