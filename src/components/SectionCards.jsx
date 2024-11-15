import { Checkbox, Flex, Progress } from "antd";

const SectionCards = ({ title, children, css = "space-x-2" }) => {
  return (
    <div className="">
      <h2 className="text-sm uppercase text-gray-200 mb-4 font-semibold">
        {title}
      </h2>
      <div className={`flex items-center ${css}`}>{children}</div>
    </div>
  );
};

export default SectionCards;
