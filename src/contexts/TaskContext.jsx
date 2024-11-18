import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext();

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        {
          id: state.length === 0 ? 1 : state[0].id + 1,
          title: action.title,
          color: action.color,
          isCheck: false,
        },
        ...state,
      ];
    case "REMOVE_TASK":
      return state.filter((t) => t.id !== id);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === id ? { ...task, isCheck: !task.isCheck } : task
      );
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const initTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  const [tasks, dispatch] = useReducer(TaskReducer, initTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     title: "lorem",
  //     color: "#936ED4",
  //     isCheck: false,
  //   },
  // ]);

  // const addTask = (title, color) => {
  //   setTasks((prevTasks) => [
  //     {
  //       id: tasks[0].id + 1,
  //       title,
  //       color,
  //       isCheck: false,
  //     },
  //     ...prevTasks,
  //   ]);
  // };

  // const toggleTask = (id) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === id ? { ...task, isCheck: !task.isCheck } : task
  //     )
  //   );
  // };

  // const removeTask = (id) => {
  //   setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  // };

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
