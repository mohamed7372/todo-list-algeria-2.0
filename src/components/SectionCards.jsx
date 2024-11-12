import { Checkbox, Flex, Progress } from "antd";

const SectionCards = ({ title, children, css }) => {
  return (
    <div className="">
      <h2 className="text-sm uppercase text-gray-300 mb-3">{title}</h2>
      <div className={`flex items-center space-x-2 ${css}`}>{children}</div>
    </div>
  );
};

export default SectionCards;
