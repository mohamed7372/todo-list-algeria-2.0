import { createContext, useEffect, useReducer, useState } from "react";

export const TaskContext = createContext();

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newObj = {
        id: state.length > 0 ? state[0].id + 1 : 1,
        title: action.task.title,
        color: action.task.color,
        isCheck: false,
      };
      return [newObj, ...state];
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const taskInit = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, dispatch] = useReducer(TaskReducer, taskInit);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
