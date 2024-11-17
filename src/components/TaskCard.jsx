import { Checkbox, Flex, Progress } from "antd";
import { useState } from "react";

const TaskCard = ({ number, task, theme = 1 }) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="bg-white rounded-lg space-y-2 w-full border border-[#f0f0f0]">
      <Checkbox
        className={`circle-checkbox ${
          theme === 1 ? "circle-checkbox-color-1" : "circle-checkbox-color-2"
        } w-full px-4 md:px-6 py-3 md:py-5 shadow-[3px_0px_13px_-7px_rgba(59,_130,_246,_0.15)] rounded-lg`}
        onChange={() => setIsCheck(!isCheck)}
        value={isCheck}
      >
        <span className={`${isCheck && "line-through"}`}>{task}</span>
      </Checkbox>
    </div>
  );
};

export default TaskCard;
