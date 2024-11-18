import { useState } from "react";
import ICONS from "../assets/constants/icons";

const TaskCard = ({ number, task, theme = 1, color }) => {
  const [isCheck, setIsCheck] = useState(false);

  const styleColor = isCheck
    ? { backgroundColor: color }
    : { border: `3px solid`, borderColor: color };

  return (
    <div
      className="bg-white space-x-4 flex items-center border border-[#f0f0f0] w-full px-4 md:px-6 py-3 md:py-5 shadow-[3px_0px_13px_-7px_rgba(59,_130,_246,_0.15)] rounded-lg cursor-pointer"
      onClick={() => setIsCheck(!isCheck)}
    >
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center"
        style={styleColor}
      >
        <img src={ICONS.CHECK} alt="" />
      </div>
      <p className={`${isCheck && "line-through text-gray-400"}`}>{task}</p>
    </div>
  );
};

export default TaskCard;
