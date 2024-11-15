import { Flex, Progress } from "antd";

const CategoryCard = ({ number, name, number_active_task }) => {
  return (
    <div className="bg-white rounded-lg px-6 space-y-2 py-3 w-[230px] shadow-[3px_0px_13px_-7px_rgba(59,_130,_246,_0.15)]">
      <p className="space-x-1 text-gray-200 font-semibold text-sm">
        <span>{number}</span>
        <span>tasks</span>
      </p>
      <h3 className="first-letter:capitalize font-semibold text-xl text-gray-900 mb-2">
        {name}
      </h3>
      <Flex gap="small" vertical>
        <Progress
          showInfo={false}
          percent={(number_active_task * 100) / number}
          className=".progress-green"
        />
      </Flex>
    </div>
  );
};

export default CategoryCard;
