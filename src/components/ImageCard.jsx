import React from "react";
import { Button, Flex, Progress } from "antd";

const ImageCard = ({ percent }) => {
  return (
    <div className="rounded-full w-32 overflow-hidden h-32">
      {/* here my image  */}
      <img
        src="benrabah_mohamed.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageCard;
