import BoxColor from "./BoxColor";
import { Modal } from "antd";
import categoriesData from "../data/categories.json";
import { useState } from "react";

const AddTask = ({ isModalOpen, handleCancel }) => {
  const [colorSelected, setColorSelected] = useState("");
  const [title, setTitle] = useState("");

  const handleNewTask = (e) => {
    e.preventDefault();

    setColorSelected("");
    setTitle("");
    handleCancel();
  };

  return (
    <Modal title="" open={isModalOpen} onCancel={handleCancel} footer={null}>
      <div className="bg-white h-full w-full rounded-xl p-8 flex items-center justify-center flex-col">
        <form className="space-y-8">
          <input
            type="text"
            placeholder="Create a new task"
            className="text-lg md:text-2xl outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
            {categoriesData?.map((item) => (
              <div onClick={() => setColorSelected(item.color)} key={item.id}>
                <BoxColor
                  key={item.id}
                  color={item.color}
                  selected={colorSelected}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNewTask}
              className="bg-[#2367f4] font-medium px-8 py-2 md:py-4 rounded-full hover:bg-[#2367f490] transform duration-300 text-lg md:text-xl text-white  md:!mt-32"
            >
              New task
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTask;
