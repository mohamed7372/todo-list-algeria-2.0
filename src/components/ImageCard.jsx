import React from "react";
import { Button, Flex, Progress } from "antd";

const ImageCard = ({ percent }) => {
  return (
    <div vertical gap="small">
      <Flex vertical gap="small">
        <Progress percent={percent} type="circle">
          {/* here my image  */}
        </Progress>
      </Flex>
    </div>
  );
};

export default ImageCard;
