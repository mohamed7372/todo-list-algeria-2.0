import { Checkbox, Flex, Progress } from "antd";

const TaskCard = ({ number, task }) => {
  return (
    <div className="bg-white rounded-lg px-6 space-y-2 py-3">
      <Checkbox onChange={() => {}}>{task}</Checkbox>
    </div>
  );
};

export default TaskCard;
