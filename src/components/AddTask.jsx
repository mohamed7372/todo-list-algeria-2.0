import BoxColor from "./BoxColor";
import { Modal } from "antd";
import categoriesData from "../data/categories.json";

const AddTask = ({ isModalOpen, handleCancel }) => {
  return (
    <Modal title="" open={isModalOpen} onCancel={handleCancel} footer={null}>
      <div className="bg-white h-full w-full rounded-xl p-8 flex items-center justify-center flex-col">
        <form action="" className="space-y-8">
          <input
            type="text"
            placeholder="Create a new task"
            className="text-lg md:text-2xl outline-none"
          />

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
            {categoriesData?.map((item) => (
              <BoxColor key={item.id} color={item.color} />
            ))}
          </div>

          <div className="flex justify-end">
            <button className="bg-[#2367f4] font-medium px-8 py-2 md:py-4 rounded-full hover:bg-[#2367f490] transform duration-300 text-lg md:text-xl text-white  md:!mt-32">
              New task
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTask;
