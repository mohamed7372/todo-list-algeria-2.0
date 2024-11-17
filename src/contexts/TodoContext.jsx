import { createContext, useState } from "react";
// import uuid from "uuid";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "homa", id: 1 },
    { title: "hoasdfzma", id: 2 },
    { title: "homa asdf", id: 3 },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: 12 }]);
    // setTasks([...tasks, { title, id: uuid() }]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
